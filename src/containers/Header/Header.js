import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/all'
import GlobalStyle from '../../style/GlobalStyle'
import {HeaderStyle} from '../../style/booksHome/HeaderStyle'
import Img from '../../assets/images/userImage.svg';
import Select from '../../components/Select';
export default function Header() {
    const [open,setOpen] = useState(false)
    return (
   <>
         <HeaderStyle>
        <Link to='./sign-up'>Badiiyat</Link>
        <nav>
            <ul>
                <li><Link to='/home'>Mening Sahifam</Link></li>
                <li><Link to='/books'>Kitoblar</Link></li>
                <li><Link to='/authors'>Yozuvchiar</Link></li>
                {/* <li><Link to='/add-book'> + Kitob</Link></li>
                <li><Link to='/add-author'> + Yozuvchi</Link></li> */}
            </ul>
            <div   onClick={()=>setOpen(!open)} className='drop-down'>
                  <img src={Img} alt='img'/>
                  <span>
                     {open ? ( <IoIosArrowUp/>) :( <IoIosArrowDown />) }
                  </span>
                     {open? <Select/>:null}
            </div>
        </nav>
    </HeaderStyle>
    <GlobalStyle/>
   </>
    )
}
