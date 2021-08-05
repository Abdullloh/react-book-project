import React from 'react'
import { NavLink } from 'react-router-dom'
import {HeaderUserStyle} from './HeaderUserStyle'
export default function HeaderUser() {
    return (
       <HeaderUserStyle>
          <NavLink className='settings' to='/my-account' ><span>1</span> <p>My Account</p></NavLink>
           <NavLink className='settings' to='/security' ><span>2</span> <p>Security</p></NavLink>
           <NavLink className='settings' to='/settings' ><span>3</span><p>Settings</p></NavLink>
       </HeaderUserStyle>
    )           
}
