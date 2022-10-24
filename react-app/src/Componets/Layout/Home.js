import React, { Component, useState, useEffect } from "react";
import AppNavbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar/index.js";
import Calendar from "../Calendar";
// import AnimatedLetters from "../AnimatedLetters";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="page row">
          <div className="col-4 left">
            <h1>This is a mini to do reminder!</h1>
            <p>
              Do you know small daily <br /> habit can lead to long-term Growth.{" "}
            </p>
            <Container fluid className="button">
              <Button className="text-center bg-light flat-button">
                <Link to="/habits" className="nav-Link">
                  Add Habit
                </Link>
              </Button>
            </Container>
          </div>
          <div className="col-8 right">
            <div>
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const homeText = () => {
//   const [letterClass, setLetterClass] = useState("text-animate");
//   const hello = ["W", "e", "l", "c", "o", "m", "e"];
//   useEffect(() => {
//     let timeoutId = setTimeout(() => {
//       setLetterClass("text-animate-hover");
//     }, 3000);
//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, []);
//   return (
//     <h1>
//       {" "}
//       <AnimatedLetters letterClass={letterClass} strArray={hello} idx={15} /> to
//       Mighty
//     </h1>
//   );
// };

export default Home;
