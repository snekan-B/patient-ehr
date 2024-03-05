// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";

// function PatientSummary() {
//   const { patientId } = useParams();
//   const [records, setRecords] = useState([]);

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/patientrecord/conv-summary/:idconv-summary/${patientId}`
//         );
//         setRecords(response.data);
//       } catch (error) {
//         console.error("Error fetching records:", error);
//       }
//     };

//     fetchRecords();
//   }, [patientId]);

//   console.log(records);

//   return (
//     <div>
//       <h1>Patient Summary</h1>
//       <p>Patient ID: {patientId}</p>
//       <h2>Records:</h2>
//       <ul>
//         {records.map((record, index) => (
//           <Link to={`/patientsum/${record._id}`} key={record._id}>
//             <li key={index}>{record.Date}</li>
//           </Link>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PatientSummary;
