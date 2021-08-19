import React,{useState} from 'react'
import { li} from 'react-router-dom'
import MyAccount from './MyAccount'
import {HeaderUserStyle} from './HeaderUserStyle'
export default function HeaderUser() {
    const [visible,setVisible] = useState('account');
  
    return (
       <>
        <HeaderUserStyle>
          <li  onClick={()=>setVisible('account')}  className={`settings ${visible === 'account' ? 'active' : ''} `} ><span>1</span> <p>My Account</p></li>
           <li    onClick={()=>setVisible('settings')} className={`settings ${visible  === 'settings' ? 'active' : ''} `}  ><span>2</span> <p>Security</p></li>
           <li     onClick={()=>setVisible('security')}  className={`settings ${visible === 'security' ? 'active' : ''} `} ><span>3</span><p>Settings</p></li>
       </HeaderUserStyle>
      
       </>
    )           
}
