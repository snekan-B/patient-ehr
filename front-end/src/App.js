import "./App.css";
import Home from "./components/Home";
import HospitalUpload from "./components/HospitalUpload";
import Login from "./components/Login";
import Otp from "./components/Otp";
import Patient from "./components/Patient";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patientprofiles from "./components/Patientprofiles";
import PatientSummary from "./components/PatientSummary";
import Summary from "./components/Summary";
import PatientCard from "./components/PatientCard";
import Records from "./components/Records";
import Audio from "./components/Audio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/hospitalupload" element={<HospitalUpload />} />
          <Route path="/" element={<Patientprofiles />} />
          <Route path="/patientCard" element={<PatientCard />} />
          <Route path="/patientReports/" element={<Records />} />
          <Route
            path="/patientsummary/:patientId"
            element={<PatientSummary />}
          />
          {/* <Route path="/patientsum/:id" element={<Summary />} /> */}
          <Route path="/patientsum/" element={<Summary />} />

          <Route path="/handleAudio" element={<Audio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
