import React,{useState} from 'react'
import {IoCameraOutline} from 'react-icons/all'
import {AccountContainer} from '../../style/Account/AccounContainer';
import {AccountStyle} from '../../style/Account/AccountStyle'
import HeaderUser from './HeaderUser'
import Header from '../Header'
import Webcam from "react-webcam";
import Img from '../../assets/images/userImage.svg';

export default function MyAccount() {
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
   width: 220,
   height: 200,
   facingMode: "user"
 };
 const [image,setImage]=useState('');
 const webcamRef = React.useRef(null);
 const capture = React.useCallback(
       () => {
         const imageSrc = webcamRef.current.getScreenshot();
         setImage(imageSrc)
       },
   
       [webcamRef]
     );
 const WebcamCapture = (e) => {
    e.preventDefault()
      capture()
     
      }
      console.log(image)
    //  return (
    //    <div className="webcam-container">
    //      <Webcam
    //        audio={false}
    //        height={200}
    //        ref={webcamRef}
    //        screenshotFormat="image/jpeg"
    //        width={220}
    //        videoConstraints={videoConstraints}
    //      />
    //      <button 
    //      onClick={(e)=>{WebcamCapture(e)}}>
    //      Capture</button>
    //    </div>
    //  );
    return (
       <>
       <Header/>
       <HeaderUser/>
       <AccountContainer>
         <div className="imgContainer">
            <div>
               <Webcam
               audio={false}
               height={200}
               ref={webcamRef}
               screenshotFormat="image/jpeg"
               width={220}
               videoConstraints={videoConstraints}
               />
            <img src={Img} alt="" />
            <IoCameraOutline onClick={(e)=>WebcamCapture(e)} className='cameraIcon'/>
            </div>
         </div>
         <AccountStyle>
            <div className="formContainer">
            <h2>Mening Profilim</h2>
            <form action="#">
              <div className="input-wrapper">
              <label htmlFor="firstName">First Name</label>
              <input className='accountInput' type="text" id='firstName'  />
              <p>Please enter your first name</p>
              </div>
              <div className="input-wrapper">
              <label htmlFor="firstName">Last Name</label>
              <input className='accountInput' type="text" id='firstName'  />
              <p>Please enter your last name</p>
              </div>
              <div className="input-wrapper-50">
               <div className="phone">
                    <label htmlFor="firstName">Phone</label>
                    <input className='phone' type="text" id='firstName'  />
                    <p>Please enter your phone number</p>
               </div>
               <div className="phone">
                    <label htmlFor="firstName">Email</label>
                    <input className='email' type="text" id='firstName'  />
                    <p>Please enter your email address</p>
               </div>
              </div>
              <button>Save changes</button>
            </form>
            </div>
         </AccountStyle>
       </AccountContainer>
       </>
    )
}
