import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/Patientprofiles.css";

function PatientCard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/patientdetails"
        );
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  useEffect(() => {
    console.log(patients);
  }, [patients]);

  return (
    <div>
      <div className="row justify-content-center outer-box">
        <h3>Available Patients</h3>
        {/* {patients.map((patient, index) => (
          <div className="col-md-6" key={index}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/patientReports/${patient.patientId}`}
            >
              <div className="card-body d-flex flex-column justify-content-center align-items-center card-box">
                <div style={{ width: "50%" }} className="card text-center">
                  <div className="img">
                    <img
                      alt="profile-pic"
                      className="profile-img"
                      src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                    />
                  </div>
                  <div>
                    <h2 style={{ marginBottom: "30px" }}>
                      {patient.patientName}
                    </h2>
                  </div>
                  <div className="links">
                    <button className="view">View patient</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))} */}

        <div className="col-md-6">
          <Link style={{ textDecoration: "none" }} to={`/patientReports/`}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center card-box">
              <div style={{ width: "50%" }} className="card text-center">
                <div className="img">
                  <img
                    alt="profile-pic"
                    className="profile-img"
                    src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                  />
                </div>
                <div>
                  <h2 style={{ marginBottom: "30px" }}>Snekan</h2>
                </div>
                <div className="links">
                  <button className="view">View patient</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* key={index} */}
        <div className="col-md-6">
          <Link style={{ textDecoration: "none" }} to={`/patientReports/`}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center card-box">
              <div style={{ width: "50%" }} className="card text-center">
                <div className="img">
                  <img
                    alt="profile-pic"
                    className="profile-img"
                    src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                  />
                </div>
                <div>
                  <h2 style={{ marginBottom: "30px" }}>Vignesh</h2>
                </div>
                <div className="links">
                  <button className="view">View patient</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PatientCard;
