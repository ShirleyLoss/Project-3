import "./index.scss";
import React from "react";
import Logo from "../../assets/images/remind-logo-register.png";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
// import { registerUser } from "../UserSlice";
// import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const hello = ["H", "e", "l", "l", "o", "!"];
  const regArray1 = [
    "P",
    "l",
    "e",
    "a",
    "s",
    "e",
    " ",
    "t",
    "e",
    "l",
    "l",
    " ",
    "u",
    "s",
    " ",
    "a",
  ];
  const regArray2 = ["l", "i", "t", "t", "l", "e", " ", "b", "i", "t"];
  const regArray3 = ["a", "b", "o", "u", "t", " "];
  const regArray4 = ["y", "o", "u", "r", "s", "e", "l", "f", "."];

  // const userState = useSelector((state) => state.user);
  // const { error } = userState.registerState;
  // const { loggedInUser } = userState;

  // const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // await fetch("/api/register", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userInfo),
    // });
    // this.history.push("/login");
    // history("/login")
     history.push('./login');
    
  };

  // const findError = (sectionName) => {
  //   const errorObj = error.find((err) => err.param === sectionName);
  //   return errorObj ? errorObj.msg : null;
  // };

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    // const target = e.target;
    // const name = target.name;
    setUserInfo((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  return (
    <div className="register-page row" onSubmit={handleSubmit}>
      <div className="text-zone col-4">
        <img src={Logo} alt="logo" />
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={hello}
            idx={15}
          />
        </h1>{" "}
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={regArray1}
            idx={17}
          />
        </h1>{" "}
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={regArray2}
            idx={19}
          />
        </h1>{" "}
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={regArray3}
            idx={20}
          />
        </h1>{" "}
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={regArray4}
            idx={22}
          />
        </h1>
        <Link to="/login">Click here to Sign-in</Link>
      </div>
      <div className="register-form col-8">
        <h1>Welcome to mini todo reminder!</h1>

        <form>
          <ul className="row">
            <li className="half col-6">
              <label htmlFor="firstName">First Name</label>

              <input
                type="text"
                id="firstName"
                placeholder="Your First Name"
                onChange={handleUserInfoChange}
                name="firstName"
              />
              {/* {error && (
                <div className="errormsg">{findError("firstName")}</div>
              )} */}
            </li>

            <li className="half col-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                onChange={handleUserInfoChange}
                id="lastName"
              />
              {/* {error && <div className="errormsg">{findError("lastName")}</div>} */}
            </li>
            <li className="col-12">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleUserInfoChange}
                id="email"
              />
              {/* {error && <div className="errormsg">{findError("email")}</div>} */}
            </li>
            <li className="half col-6">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleUserInfoChange}
                id="password"
              />
              {/* {error && <div className="errormsg">{findError("password")}</div>} */}
            </li>
            <li className="half col-6">
              <label htmlFor="passwordConfirmation">Confirm Password</label>

              <input
                type="password"
                name="passwordConfirmation"
                placeholder="Confirm Password"
                onChange={handleUserInfoChange}
                id="passwordConfirmation"
              />
              {/* {error && (
                <div className="errormsg">
                  {findError("passwordConfirmation")}
                </div>
              )} */}
            </li>

            <li className="col-12">
              <input type="checkbox" name="ppts" required />
              <label htmlFor="ppts">
                I have read the Privacy Policy and agree to the Terms of Service
              </label>
            </li>
            <li className="full col-12">
              <input
                type="submit"
                // onClick={() => history.push('./login')}
                className="flat-button"
                value="Submit"
                to="/login"
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Register;
