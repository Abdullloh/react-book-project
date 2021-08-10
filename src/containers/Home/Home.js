import React from 'react'
import Header from '../Header'
import {useSelector} from 'react-redux'
import {UserStyle} from './UserPageStyle'
import userBg from '../../assets/images/userbg.png'
import userImage  from '../../assets/images/userImage.svg'
export default function Home() {
    const data = useSelector(state => state.user)
    const {firstName,lastName} = data.user

    return ( 
        <div>
            <Header/>
           <UserStyle>
              <div className="topSection">
                  <img src={userBg} alt="" />
                  <div className="user">
                      <div className="user_Image">
                      <img src={userImage} alt="userPhoto" />
                      <i className="start"/>
                      </div>
                      <div className="user_Info">
                          <h3>{firstName} {lastName}</h3>
                          <div className="user_bio">
                              <h4>Manzil:</h4> <p>Febrauary 08,1999</p>
                          </div>
                          <div className="user_bio">
                              <h4>Manzil:</h4> <p>Febrauary 08,1999</p>
                          </div>
                          <div className="user_bio">
                              <h4>Manzil:</h4> <p>Febrauary 08,1999</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="category">
                  <h4>My Books</h4>
                  <h4>My shelf</h4>
              </div>
              <div className="bottomSection">
                 <div className="left-col">

                 </div>
                 <div className="right-col">

                 </div>
              </div>
           </UserStyle>
        </div>
    )
}
