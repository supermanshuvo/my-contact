import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      alert("I am in!");
      history.push("/");
      console.log(result);
    } catch (err) {
      alert("Sorry Try again!");
    }
  };
  return (
    <div className="center container" style={{ maxWidth: "500px" }}>
      <h3>Please Sign Up</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-field">
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn blue">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
