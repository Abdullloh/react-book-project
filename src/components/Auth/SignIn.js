import React,{useState} from 'react'
import Img from './img/SignIn.jpg'
import {Link} from 'react-router-dom'
import classes from './signIn.module.css'
export default function SignIn() {
    const[signIn,setSign] = useState({
        email:'',
        password:''
    })
    const handleInputChange = e =>{
        const{name,value} = e.target;
        console.log('clikde',name)
        setSign({...signIn,[name]:value})
    }
    
    const submitForm = (e) =>{
        e.preventDefault()
        const{email,password} = signIn;
        const user = {
            email,
            password
        }
        var requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,
            'Access-Control-Allow-Origin':'http://book.alitechbot.uz/api/login' },
            body: JSON.stringify(user),
           

          };
          fetch("http://book.alitechbot.uz/api/login", requestOptions)
           .then(data=> data.json())
           .then(data=>{
               console.log(data);
               if(data.success){
                   alert('Succesfully Log In')
                   window.location.pathname= './home'
               }else{
                   const {error} = data
                   alert(error)
               }
           })

    }
    return (

        <div className={classes.signInContainer}>
            <div className={classes.colLeft}>
                 <img src={Img} alt="leftCont" />
            </div>
            <div className={classes.colRight}>
                  <div className={classes.signContainer}>
                      <h1>Sign in</h1>
                      <p>Do not you have an account?<Link to='./sign-up'>Sign up</Link></p>
                      <form onSubmit={(e)=>submitForm(e)} action="#">
                          <input onChange={handleInputChange} type="text" name='email' placeholder='Your email' />
                          <input onChange={handleInputChange} type="text" name='password' placeholder='Your password' />
                          <button className={classes.button}>Next step</button>
                      </form>
                  </div> 
            </div>
        </div>
    )
}
