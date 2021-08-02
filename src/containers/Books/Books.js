import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {Header} from '../../style/booksHome/HeaderStyle'
import BookContainer from './BookContainer'
import {MainContainer} from '../../style/booksHome/Container'
import GlobalStyle from '../../style/GlobalStyle'
import ImgContainer from './ImgContainer'
import {useSelector} from 'react-redux'
import Search from './Search';
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/all'
import Img from '../../assets/images/userImage.svg';
import Select from '../../components/Select';

export default function Books() {
    const [open,setOpen] = useState(false)
    const user = useSelector(state => state.user);
    console.log(user)
   console.log(open);
    return (    
<>
           <MainContainer>
              <Header>
                  <Link to='./sign-up'>Badiiyat</Link>
                  <nav>
                      <ul>
                          <li><Link to='#'>Mening Sahifam</Link></li>
                          <li><Link to='#'>Kitoblar</Link></li>
                          <li><Link to='#'>Yozuvchiar</Link></li>
                          <li><Link to='#'>Kitob Qo'shish</Link></li>
                          <li><Link to='#'>Yozuvchi Qo'shish</Link></li>
                      </ul>
                      <div   onClick={()=>setOpen(!open)} className='drop-down'>
                            <img src={Img} />
                            <span>
                               {open ? ( <IoIosArrowUp/>) :( <IoIosArrowDown />) }
                            </span>
                               {open? <Select/>:null}
                      </div>
                  </nav>
              </Header>
             <ImgContainer> 
                 <Search/>  
             </ImgContainer>
             <BookContainer/>
          </MainContainer>
      <GlobalStyle/>
</>

    )
}
