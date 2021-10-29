import React, { useState } from "react";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, confirmPassword);
  };
  return (
    <div className="center container" style={{ maxWidth: "500px" }}>
      <h3>please Sign up</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-field">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your LastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Enter your Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="btn blue">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
