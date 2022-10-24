import { Link} from "react-router-dom";
import "./index.scss";
import Logo from "../../../assets/images/just-a-reminder.png";
import {
  faHome,
  faUser,
  faEnvelope,
  faCode,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <nav>
          <Link
            exact="true"
            className="home-link"
            activeclassname="active"
            to="/"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </Link>

          <Link
            className="calendar-link"
            exact="true"
            activeclassname="active"
            to="/habits"
          >
            <FontAwesomeIcon icon={faCalendar} color="#4d4d4e" />
          </Link>

          <Link
            className="habit-link"
            exact="true"
            activeclassname="active"
            to="/register"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;
