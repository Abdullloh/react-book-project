import React from 'react'
import { Link } from 'react-router-dom';
import { SelectStyle } from './SelectStyle';

export default function Select() {
    return (
        <SelectStyle>
           <Link className='selectOption' to='/my-account' >My Account</Link>
           {/* <Link className='selectOption' to='/security' > Security</Link>
           <Link className='selectOption' to='/settings' >Settings</Link> */}
           <Link className='selectOption' to='/add-book'> Kitob +</Link>
           <Link className='selectOption' to='/add-author'> Yozuvchi +</Link>
      </SelectStyle>
    )
}
