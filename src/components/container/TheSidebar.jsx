import React from "react";
import { MdOutlineContactPage, MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

export default function TheSidebar() {
  return (
    <React.Fragment>
      <div className="_the_sidebar">
        <ul className="_sidemenu">
          <li>
            <Link to="/dashboard">
              <MdOutlineDashboard />
            </Link>
          </li>
          <li>
            <Link to="/contact-list">
              <MdOutlineContactPage />
            </Link>
          </li>
          <li>
            <Link to="/contact-list">
              <MdOutlineContactPage />
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
