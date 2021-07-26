import React from 'react'
import Home from './components/Home'
import {Switch,Route,Redirect} from 'react-router-dom'
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

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
       <Switch>
        <Route exact path="/home" render={()=><Home/>}/>
        {/* <Route component={Home}/> */}
      </Switch>
  )
}
export default App;
