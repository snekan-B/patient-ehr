import React, { useState } from "react";

function HospitalUpload() {
  const [file, setFile] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      fetch("http://localhost:5006/upload", {
        method: "POST",
        body: formData,
      }).then((response) => {
        if (response.ok) {
          console.log("File uploaded successfully");
          console.log(formData);
        } else {
          console.log(formData);
          console.error("Error uploading file");
        }
      });
    } catch (error) {
      console.log(formData);
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Select File:</label>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HospitalUpload;
