import React from 'react'
import {IoCameraOutline} from 'react-icons/all'
import {AccountContainer} from '../../style/Account/AccounContainer';
import {AccountStyle} from '../../style/Account/AccountStyle'
import HeaderUser from './HeaderUser'
import Header from '../Header'
import Img from '../../assets/images/userImage.svg'
export default function MyAccount() {
    return (
       <>
       <Header/>
       <HeaderUser/>
       <AccountContainer>
         <div className="imgContainer">
            <div>
            <img src={Img} alt="" />
            <IoCameraOutline className='cameraIcon'/>
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
