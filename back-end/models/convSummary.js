// const mongoose = require("mongoose");

// const convSummarySchema = new mongoose.Schema({
//   patientId: Number,
//   doctorSummary: String,
//   patientSummary: Object,
//   indices: Array,
//   meaning: Array,
//   hospitalId: Number,
// });

// const ConvSummaryModel = mongoose.model("conv-summary", convSummarySchema);

// module.exports = ConvSummaryModel;

const mongoose = require("mongoose");

const convSummarySchema = new mongoose.Schema({
  patientId: {
    type: Number,
    required: true,
  },
  hospitalId: {
    type: Number,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  doctorSummary: {
    type: String,
    required: true,
  },
  patientSummary: {
    summaryText: {
      type: String,
      required: true,
    },
    indices: [
      {
        type: [String],
        required: true,
      },
    ],
    meanings: [
      {
        type: [String],
        required: true,
      },
    ],
  },
  Date: {
    type: String,
    required: true,
  },
});

const ConvSummaryModel = mongoose.model("conv-summary", convSummarySchema);

module.exports = ConvSummaryModel;
