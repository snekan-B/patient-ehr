import DataTable from "react-data-table-component";
import "../css/Records.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
      backgroundColor: "#F1FADA",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      fontSize: "1.3em",
      fontWeight: "bolder",
      backgroundColor: "#2D9596",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};

const Records = () => {
  const { patientId } = useParams();
  const [records, setRecords] = useState([]);
  const [values, setValues] = useState("");

  const columns = [
    {
      name: "Doctor Consulted",
      selector: (row) => row.doctorName,
    },
    // {
    //   name: "Hospital",
    //   selector: (row) => row.hospital,
    // },
    {
      name: "Visited On",
      selector: (row) => row.Date,
    },
    //   {
    //     name: "Type",
    //     selector: (row) => row.type,
    //   },
    {
      name: "View",
      cell: (row) => (
        // <Link to={`/patientsum/${row._id}`}>
        <Link to={`/patientsum/`}>
          {console.log(row._id)}
          <button className="btn btn-primary">View</button>
        </Link>
      ),
    },
  ];

  const datavalues = [
    {
      doctorName: "Dr. Snekan",
      Date: "1/1/2023",
      _id: 20,
    },
    {
      doctorName: "Dr. Vignesh",
      Date: "5/6/2023",
      _id: 20,
    },
    {
      doctorName: "Dr. Sarumathy",
      Date: "10/12/2023",
      _id: 20,
    },
    {
      doctorName: "Dr. Srivatsan",
      Date: "10/2/2024",
      _id: 20,
    },
  ];

  // useEffect(() => {
  //   const fetchRecords = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/conv-summary/${patientId}`
  //       );
  //       response.data.forEach((data) => {
  //         console.log(data._id);
  //       });
  //       setRecords(response.data);
  //     } catch (error) {
  //       console.error("Error fetching records:", error);
  //     }
  //   };

  //   fetchRecords();
  // }, [patientId]);

  // useEffect(() => {
  //   const suggestion = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/suggestion/${patientId}`
  //       );
  //       if (
  //         response.data &&
  //         Array.isArray(response.data) &&
  //         response.data.length > 0
  //       ) {
  //         setValues(response.data[0].suggestions);
  //       } else {
  //         setValues("");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching records:", error);
  //     }
  //   };

  //   suggestion();
  // }, []);

  console.log(values);

  return (
    <>
      <h1>Suggestions</h1>
      {/* <div>
        {values &&
          values
            .split("\n")
            .map((line, index) => <div key={index}>{line}</div>)}
      </div> */}
      <div className="table-box">
        <DataTable
          title="Available Reports"
          columns={columns}
          data={datavalues}
          pagination
          customStyles={customStyles}
          className="table"
        />
      </div>
    </>
  );
};

export default Records;
