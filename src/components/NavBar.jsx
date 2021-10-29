import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useHistory } from "react-router";
export default function NavBar({ user }) {
  const history = useHistory();
  return (
    <nav>
      <div className="nav-wrapper blue" te>
        <Link to="/" className="brand-logo" style={{ textDecoration: "none" }}>
          Superman Shuvo
        </Link>
        <ul id="nav-mobile" className="right">
          {user ? (
            <li>
              <button
                className="btn blue white-text"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  auth.signOut();
                  history.push("/login");
                }}
              >
                Log Out
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
