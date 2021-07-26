import React, { useState, useCallback } from "react";
import Img from "../../assets/images/SignUp.png";
import { Link, Route } from "react-router-dom";
import classes from "./signUp.module.css";
import SignIn from "./SignIn";
import axios from "axios";
import InputErrorMsg from "./InputErrorMsg";

export default function SignUp() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });
  console.log(state);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const [errors, setErrors] = useState({ type: "", message: "" });
  console.log("My errors:", errors);

  function submitForm(e) {
    e.preventDefault();
    const { email, firstName, lastName, password } = state;
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    localStorage.setItem("users", JSON.stringify(user));

    axios
      .post("https://book.alitechbot.uz/api/sign-up", state)
      .then((res) => {
        const { data } = res;
        if (data.success) {
          alert("Succed in login");
          localStorage.setItem("token", data.token);
          window.location.pathname= './home'
        } else {
          console.log("Set error", data);
          const msg = handleErrorObj(data?.msg);
          setErrors(msg);
        }
      })
      .catch((error) => {
        const msg = handleErrorObj(error.response?.data?.msg);
        setErrors(msg);
      });
  }

  const handleErrorObj = (errorMsg = "") => {
    if (errorMsg.includes("E11000")) {
      return {
        type: "email",
        message: "This email already used",
      };
    }
    console.log(errorMsg);
    const errorType = errorMsg.slice(
      errorMsg.indexOf('"'),
      errorMsg.lastIndexOf('"')
    );
    console.log(errorType);
    return {
      type: errorType.replace('\"', '').replace('\\', ''),
      message: errorMsg,
    };
  };

  //  useEffect(()=>{
  //    const{email,firstName,lastName,password} = state
  //     localStorage.setItem('users',JSON.stringify({firstName:firstName,lastName:lastName,email:email,password:password}))
  // },[])
  return (
    <div className={classes.signUpContainer}>
      <div className={classes.colLeft}>
        <img src={Img} alt="leftCont" />
      </div>
      <div className={classes.colRight}>
        <div className={classes.signContainer}>
          <h1>Sign Up</h1>
          <p>
            Do not you have an account?<Link className={classes.link} to="/sign-in">Sign in</Link>
          </p>
          {/* <p style={{color:'white'}}>{errors ? errors:null}</p> */}
          <Route path="/sign-in" render={() => <SignIn />} />
          <form
            onSubmit={(e) => submitForm(e)}
            className={classes.form}
            action="#"
          >
            {/* <InputErrorMsg type="firstName" errorObj={errors} /> */}
            <InputErrorMsg type="firstName" errorObj={errors} />
            <input
              onChange={handleInputChange}
              type="firstName"
              name="firstName"
              placeholder="First Name"
            />
             <InputErrorMsg type="lastName" errorObj={errors} />
            <input
              onChange={handleInputChange}
              type="text" 
              name="lastName"
              placeholder="Last Name"
            />
                <InputErrorMsg type="phone" errorObj={errors} />
            <input
              onChange={handleInputChange}
              type="tel"
              name="phone"
              placeholder="Phone"
            />
         <InputErrorMsg type="email" errorObj={errors} />
            <input
              onChange={handleInputChange}
              type="email"
              name="email"
              placeholder="Email"
            />
              <InputErrorMsg type="password" errorObj={errors} />
            <input
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="Password"
            />
            
            <button className={classes.button}> Next step </button>
          </form>
        </div>
      </div>
    </div>
  );
}
