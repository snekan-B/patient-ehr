import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    axios
      .post("http://localhost:5000/register", { email, password })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
        <br></br>
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Signup;
