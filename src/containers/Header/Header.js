import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/all'
import GlobalStyle from '../../style/GlobalStyle'
import {HeaderStyle} from '../../style/booksHome/HeaderStyle'
import Img from '../../assets/images/userImage.svg';
import { useSelector} from "react-redux";
import Select from '../../components/Select';
export default function Header() {
    const user = useSelector((state) => state.user);
    console.log(user)
    
    return (
   <>
         <HeaderStyle>
        <Link to='/sign-up'>Badiiyat</Link>
        <nav>
            <ul>
                <li><Link to='/home'>Bosh Sahifa</Link></li>
                <li><Link to='/books'>Kitoblar</Link></li>
                <li><Link to='/authors'>Yozuvchiar</Link></li>
              
            </ul>
            <div    className='drop-down'>
                  {/* <img src={Img} alt='img'/> */}
                  <Select/>
            </div>
        </nav>
    </HeaderStyle>
    <GlobalStyle/>
   </>
    )
}
