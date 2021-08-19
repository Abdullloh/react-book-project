import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/all'
import GlobalStyle from '../../style/GlobalStyle'
import {HeaderStyle} from '../../style/booksHome/HeaderStyle'
import Img from '../../assets/images/userImage.svg';
import { useSelector,useDispatch} from "react-redux";
import Select from '../../components/Select';
import t from '../../Lang';
import {updateLanguageAction} from '../../store/actions/userActions'
export default function Header() {
    const user = useSelector((state) => state.user);
    console.log(user)
    const store = useSelector(state => state.user);
    const dispatch = useDispatch();
    const handleLanguage = (lang) => {
        dispatch(updateLanguageAction(lang));
      }
    return (
   <>
         <HeaderStyle>
        <Link to='/sign-up'>Badiiyat</Link>
       
        <nav>
            <ul>
                <li><Link to='/home'>{t("Home")}</Link></li>
                <li><Link to='/books'>{t("Books")}</Link></li>
                <li><Link to='/authors'>{t("Authors")}</Link></li>
              
            </ul>
            <select name="lang" onChange={(e) => handleLanguage(e.target.value)} value={store.user?.lang}>
                  <option value="uz">Uzbekcha</option>
                  <option value="ru">Ruscha</option>
                  <option value="eng">Englizcha</option>
            </select>
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
