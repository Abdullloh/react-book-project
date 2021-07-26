import React from 'react'
import {Link} from 'react-router-dom';
import {Header} from './style/booksHome/HeaderStyle'
import BookContainer from './BookContainer'
import {MainContainer} from './style/booksHome/Container'
import GlobalStyle from './style/GlobalStyle'
import ImgContainer from './ImgContainer'
import Search from './Search';
import Img from './Auth/img/userImage.svg';

export default function Home() {
    return (    
<>
           <MainContainer>
              <Header>
                  <Link to='./sign-up'>Badiiyat</Link>
                  <nav>
                      <ul>
                          <li><Link to='#'>Bosh sahifa</Link></li>
                          <li><Link to='#'>Nasr</Link></li>
                          <li><Link to='#'>Nazm</Link></li>
                          <li><Link to='#'>Maqolalar</Link></li>
                          <li><Link to='#'>Forum</Link></li>
                      </ul>
                      <div>
                            <img src={Img} />
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
