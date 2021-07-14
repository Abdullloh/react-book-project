import React from 'react'
import bg from './Auth/img/bg.svg'
import {Container} from './style/booksHome/imgContainerStyle';
export default function imgContainer(props) {
  const style ={
    width: '100%',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center'
  }
    return (
       <div style={style}>
          <Container>
          <img src={bg} alt="bg" />
          {props.children}
        </Container>
       </div>
    )
}
