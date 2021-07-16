import React,{useState} from "react";
import Img from "./img/SignUp.png";
import { Link, Route} from "react-router-dom";
import classes from "./signUp.module.css";
import SignIn from "./SignIn";
export default function SignUp() {
  const [state,setState] = useState({
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    password:''
})
console.log(state);
 const handleInputChange = e=>{
     const {name,value} = e.target
     setState({...state,[name]:value})
 }
  function submitForm(e) {
     e.preventDefault()
     const{email,firstName,lastName,password} = state
     const user = {
      firstName,
      lastName,
      email,
      password,
     }
     localStorage.setItem('users',JSON.stringify(user))
     var requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };
     fetch("https://book.alitechbot.uz/api/sign-up", requestOptions)
      .then(data=>data.json())
      .then(result=>{
        console.log(result);
        if(result.success){
          alert('Ruyhatdan muvofaqiyatli utdiz')
          window.location.pathname='./home'
        }else{
          const{msg} = result;
          alert(msg)
        }
        localStorage.setItem('token',result.token)
      }
      )
      .catch(err=>console.log(err.msg))
      
   }
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
            Do not you have an account?<Link to="/sign-in">Sign in</Link>
          </p>
            <Route path="/sign-in" render={() => <SignIn />} />
          <form  onSubmit={(e) => submitForm(e)}  className={classes.form} action="#">
            <input onChange={handleInputChange} type="text" name="firstName" placeholder="First Name" />
            <input onChange={handleInputChange} type="text" name="lastName" placeholder="Last Name" />
            <input onChange={handleInputChange} type="tel" name="phone" placeholder="Phone" />
            <input onChange={handleInputChange} type="email" name="email" placeholder="Email" />
            <input onChange={handleInputChange} type="password" name="password" placeholder="Password" />
            <button  className={classes.button}> Next step </button>
          </form>
        </div>
      </div>
    </div>
  );
}
