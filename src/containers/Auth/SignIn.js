import React, { useState, useRef, useContext } from "react";
import Img from "../../assets/images/SignIn.jpg";
import { Link } from "react-router-dom";
import classes from "./signIn.module.css";
import axios from "axios";
import ModeContext from "../../Context/mode-context";
import { useDispatch ,useSelector} from 'react-redux';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/all";
import { updateUserAction} from '../../store/actions/userActions';
import {useHistory} from 'react-router-dom';

export default function SignIn() {
  const history = useHistory();
  const [signIn, setSign] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  console.log(user)
  const passwordRef = useRef();
  // const [errors, setErrors] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("clikde", name);
    setSign({ ...signIn, [name]: value });
    if (name === "password" && value.length > 6) {
      const { current } = passwordRef;
      current.style.cssText = "border:1px solid green";
    } else {
      const { current } = passwordRef;
      current.style.cssText = "border:1px solid red";
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    
    axios
      .post("/api/login", signIn)
      .then((res) => {
        console.log(res);
        const { success, token,user } = res.data;
        if (success) {
          alert("Succesfully Log In");
          history.push('')
          dispatch(updateUserAction({user,token}));
        } else {
          const { error } = res.data;
          console.log(error);
        }
      })
      .catch((data) => {
        const { error } = data.response.data;
        console.log(error);
      });
  };

  const themes = useContext(ModeContext);
  console.log(themes);
  const [theme, setMode] = useState(themes.light);
  function handleMode(e) {
    const value = e.target.value;
    console.log(value);
    if (value === "dark") {
      setMode(themes.dark);
    } else {
      setMode(themes.light);
    }
  }
  console.log(themes);

  const [visible, setVisible] = useState(false);
  return (
    <div className={classes.signInContainer}>
      <div className={classes.colLeft}>
        <img src={Img} alt="leftCont" />
      </div>
      <div style={theme} className={classes.colRight}>
        <select
          className={classes.select}
          name="mode"
          onChange={(e) => handleMode(e)}
        >
          <option selected value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <div className={classes.signContainer}>
          <h1>Sign in</h1>
          <p>
            Do not you have an account?<Link className={classes.link} to="./sign-up">Sign up</Link>
          </p>
          <form onSubmit={(e) => submitForm(e)} action="#">
            <input
              onChange={handleInputChange}
              type="text"
              name="email"
              placeholder="Your email"
            />
            <input
              ref={passwordRef}
              onChange={handleInputChange}
              type={visible ? "text" : "password"}
              name="password"
              placeholder="Your password"
            />
            <button
              type="button"
              className={classes.visibleIcon}
              onClick={() => setVisible((visible) => !visible)}
            >
              {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
            <button className={classes.button}>Next step</button>
          </form>
        </div>
      </div>
    </div>
  );
}
