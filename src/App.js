import React from 'react'
import { useSelector } from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom'
import Books from './containers/Books'
import Authors from './containers/Authors'
import SignIn from './containers/Auth/SignIn';
import  Home from './containers/Home/'
import SignUp from './containers/Auth/SignUp';
import BookView from './containers/Books/BookView'
import AuthorView from './containers/Authors/AuthorView'
import MyAccount from './containers/User/MyAccount';
import Security from './containers/User/Security';
import Settings from './containers/User/Settings';
import getStoredState from 'redux-persist/es/getStoredState';

function App() {
  const data = useSelector(state=> state.user)
  const token = data.token
  if(!token){  
   return(
     <>
      <Switch>
        <Route exact path="/sign-in" render={()=><SignIn/>}/>
        <Route exact path="/sign-up" render={()=><SignUp/>}/>
        <Route component={SignIn}/>
      </Switch>
     </>
   )
  }
  return (
<>
     {/* <Redirect from={['/sign-in','/sign-up']}  to='/home'/> */}
       <Switch>
        <Route exact path="/books" render={()=><Books/>}/>
        <Route exact path="/my-account" render={()=><MyAccount/>}/>
        <Route exact path="/security" render={()=><Security/>}/>
        <Route exact path="/settings" render={()=><Settings/>}/>
        <Route exact path="/home" render={()=><Home/>}/>
        <Route exact path="/authors" render={()=><Authors/>}/>
        <Route component={BookView} exact path='/books/:id' />
        <Route component={AuthorView} exact path='/authors/:id' />
        <Route component={Home}/>
      </Switch>
</>
  )
}
export default App;
