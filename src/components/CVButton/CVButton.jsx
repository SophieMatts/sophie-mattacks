import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function CVButton() {
  return (
    <button>
      <Link to="/CV">CV</Link>
    </button>
  );
}

export default CVButton;
