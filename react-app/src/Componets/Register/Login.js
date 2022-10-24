import React, { Component } from "react";
import NavBar from "../Layout/NavBar/index";
import Logo from "../../assets/images/2-removebg-preview.png";
import "./index.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  render() {
    // const history = useHistory();
    return (
      <div className="login-Form row">
        {/* <NavBar /> */}

        <Img />
        <h1>Welcome to MIGHTY !</h1>
        <form>
          <div className="col-12">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" placeholder="Email" id="email" />
          </div>

          <div className="col-12">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
            />
            <Link
              type="submit"
              // onClick={() => push("/")}
              className="flat-button mt-5"
              value="Submit"
              to="/"
            >
              Submit
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

// const logo = "../../assets/images/2-removebg-preview.png";

const Img = () => {
  return <img className="logo" src={Logo} alt="logo" />;
};
