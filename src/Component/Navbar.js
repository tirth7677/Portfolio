import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link to="/" className="tmlogo">
        <p>
          <b>MT</b>
        </p>
      </Link>
      <ul>
        <li>
        <Link to="/" className="tmlogo">
          <p><b>Projects</b></p>
          </Link>
        </li>
        <li>
        <Link to="/aboutme" className="tmlogo">
          <p>
            <b>Research</b>
          </p>
          </Link>
        </li>
        <li>
          <Link to="/aboutme" className="tmlogo">
            <p>
              <b>About</b>
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
