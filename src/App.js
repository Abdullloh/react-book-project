import React from 'react'
import Books from './containers/Books'
import {Switch,Route,Redirect} from 'react-router-dom'
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';
import BookView from './containers/Books/BookView'
import MyAccount from './containers/User/MyAccount';
import Security from './containers/User/Security';
import Settings from './containers/User/Settings';

function App() {
  const token  = window.localStorage.getItem('token')
  console.log(token);
  if(!token){
   return(
     <>
      <Redirect from='/home' to='/sign-in'/>
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
     {/* <Redirect to='/books'/> */}
       <Switch>
        <Route exact path="/books" render={()=><Books/>}/>
        <Route exact path="/my-account" render={()=><MyAccount/>}/>
        <Route exact path="/security" render={()=><Security/>}/>
        <Route exact path="/settings" render={()=><Settings/>}/>
        <Route component={BookView} exact path='/books/:id' />
        <Route component={Books}/>
      </Switch>
</>
  )
}
export default App;
