import React from 'react'
import { Link } from 'react-router-dom';
import { SelectStyle } from './SelectStyle';
import MyAccount from '../containers/User/MyAccount'
import Security from '../containers/User/Security'
import Settings from '../containers/User/Security'
export default function Select() {
    return (
        <SelectStyle>
           <Link className='selectOption' to='/my-account' >My Account</Link>
           <Link className='selectOption' to='/security' > Security</Link>
           <Link className='selectOption' to='/settings' >Settings</Link>
        
      </SelectStyle>
    )
}
