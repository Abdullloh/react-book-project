import React from 'react'
import {useSelector} from 'react-redux'
import BookContainer from './BookContainer'
import {MainContainer} from '../../style/booksHome/Container'
import GlobalStyle from '../../style/GlobalStyle'
import ImgContainer from './ImgContainer'
import Search from './Search';
import Header from '../Header'


export default function Books() {
  
    const user = useSelector(state => state);
    console.log(user)
    return (    
<>
           <MainContainer>
         <Header/>
             <ImgContainer> 
                 <Search/>  
             </ImgContainer>
             <BookContainer/>
          </MainContainer>
      <GlobalStyle/>
</>

    )
}
