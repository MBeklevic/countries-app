import React from "react";
import { Link } from "react-router-dom";
import "./styles/NotFound.css";

const NotFound = () => (
  <div className="NotFound">
    <h1>Not Found...(</h1>
    <Link style={{ textDecoration: "none" }} to="/countries-app">
      HOMEPAGE
    </Link>
  </div>
);
export default NotFound;
