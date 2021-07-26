import React from 'react'
import bg from '../../assets/images/bg.svg'
import {Container} from '../../style/booksHome/imgContainerStyle';
export default function imgContainer(props) {
  const style ={
    width: '100%',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     flexDirection:'column'
  }
    return (
       <div style={style}>
          <Container>
            <p>Temuriylar 
davri 
adabiyoti</p>
          <img src={bg} alt="bg" />
        </Container>
          {props.children}
       </div>
    )
}
