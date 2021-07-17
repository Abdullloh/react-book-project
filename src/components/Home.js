import React from 'react'
import {Link} from 'react-router-dom';
import {Header} from './style/booksHome/HeaderStyle'
import BookContainer from './BookContainer'

import ImgContainer from './ImgContainer'
import Search from './Search';
export default function Home() {
    return (
           <div className="container">
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
                  </nav>
              </Header>
              <ImgContainer> <Search/>  </ImgContainer>
             <BookContainer/>
           </div> 
    )
}
