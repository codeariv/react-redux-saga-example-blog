import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            React Redux-Saga Blog
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
