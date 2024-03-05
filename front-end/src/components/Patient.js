import React, { useState } from "react";
import axios from "axios";
import "../css/Patient.css";

function Patient() {
  const [phone, setPhone] = useState("");
  const [patientName, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/patientdetails", {
        phone,
        patientName,
        email,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="vh-100 gradient-custom outer-box">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Patient Details
                    </h2>
                    <p className="text-white-50 mb-5">
                      Please enter your Details!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">
                        Phone No:
                      </label>
                      <input
                        type="number"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5 mt-5"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

export default Patient;
