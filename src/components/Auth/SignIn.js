import React,{useState,useRef} from 'react'
import Img from './img/SignIn.jpg'
import {Link} from 'react-router-dom'
import classes from './signIn.module.css'
import axios from 'axios'
export default function SignIn() {
    const[signIn,setSign] = useState({
        email:'',
        password:''
    })
    const passwordRef = useRef()

    const handleInputChange = e =>{
        const{name,value} = e.target;
        console.log('clikde',name)
        setSign({...signIn,[name]:value})
        if( name==='password' && value.length>6){
            const {current} = passwordRef;
            current.style.cssText = 'border:1px solid green'
        }else{
            const {current} = passwordRef;
            current.style.cssText = 'border:1px solid red'
        }
        
    }
    
    const submitForm = (e) =>{
        e.preventDefault()
        const{email,password} = signIn;
        const user = {
            email,
            password
        }
        axios.post("https://book.alitechbot.uz/api/login",user)
           .then(res=>{
               console.log(res);
               const{success} = res.data
               if(success){
                   alert('Succesfully Log In')
                   window.location.pathname= './home'
               }else{
                   const {error} = res.data
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
                          <input  ref={passwordRef} onChange={handleInputChange} type="text" name='password' placeholder='Your password' />
                          <button className={classes.button}>Next step</button>
                      </form>
                  </div> 
            </div>
        </div>
    )
}
