import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const logout = () => {
    console.log("I am logout");
  };
  return (
    <nav>
      <div className="nav-wrapper blue">
        <Link to="/" className="brand-logo">
          Superman Shuvo
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Todo</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/" onClick={logout()}>
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
