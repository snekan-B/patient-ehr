const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const patientModel = require("./models/patient.js");
const bodyParser = require("body-parser");
const nodemail = require("nodemailer");
const otpGenerator = require("otp-generator");
const ConvSummaryModel = require("./models/convSummary.js");
const patientdetailModel = require("./models/patientDetails.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const otpconfig = {
  upperCaseAlphabets: false,
  specialChars: false,
  lowerCaseAlphabets: false,
  digits: true,
};

const otpStorage = {};

mongoose.connect(
  "mongodb+srv://SarumathyPrabakaran:sarumathy@cluster0.lbdvmf4.mongodb.net/medical-simplify?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("MongoDB database connected successfully");
});

const transporter = nodemail.createTransport({
  service: "Gmail",
  auth: {
    user: "snekan13@gmail.com",
    pass: "ftyt rdxo rszv ctog",
  },
});

app.post("/send-otp", (req, res) => {
  const { phone } = req.body;
  patientdetailModel
    .findOne({ phone: phone })
    .then((user) => {
      if (user) {
        const { email } = user;

        const otp = otpGenerator.generate(6, otpconfig);
        otpStorage[email] = otp;
        otpStorage[1] = phone;

        const mailoptions = {
          from: "snekan13@gmail.com",
          to: email,
          subject: "Verify your patient Number",
          text: "Use This One Time password : " + otp,
        };

        transporter.sendMail(mailoptions, (error, info) => {
          if (error) {
            console.log("Email error:", error);
            res.json({ message: "Email send error" });
          } else {
            console.log("Email sent");
            console.log(otpStorage);
            res.json({ message: "Email sent" });
          }
        });
      } else {
        console.log("Patient doesn't exist");
        res.json({ message: "patient doesn't exist" });
      }
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Internal Server Error" });
    });
});
app.post("/verifyotp", (req, res) => {
  console.log(otpStorage);
  const { otp } = req.body;

  const email = Object.keys(otpStorage).find((key) => otpStorage[key] === otp);
  if (email) {
    delete otpStorage[email];
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  patientModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/patientdetails", async (req, res) => {
  try {
    const { phone, patientName, email } = req.body;

    const newPatient = new patientdetailModel({
      phone,
      patientName,
      email,
    });

    await newPatient.save();

    res.json(newPatient);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/patientdetails", async (req, res) => {
  try {
    const phone = otpStorage[1];
    const patients = await patientdetailModel.find({ phone });

    console.log(patients);
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.get("/conv-summary/:patientId", async (req, res) => {
  try {
    const patientId = req.params.patientId;

    const records = await ConvSummaryModel.find({ patientId });
    records.forEach((data) => {
      data._id = data._id.toHexString();
    });

    res.json(records);
  } catch (error) {
    console.error("Error fetching records:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//to get the individual data of a person using mongo id

app.get("/patientrecord/conv-summary/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ObjectId" });
    }

    const record = await ConvSummaryModel.findById(id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json(record);
  } catch (error) {
    console.error("Error fetching record:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/suggestion/:patientId", async (req, res) => {
  try {
    const patientId = req.params.patientId;
    const patients = await patientdetailModel.find({ patientId });

    console.log(patients);
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.listen(5000, () => {
  console.log("server running..");
});
