import React from 'react'
import Home from './components/Home'
import {Switch,Route} from 'react-router-dom'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
function App() {
  return (
     <Switch>
            <Route exact path="/sign-in" render={() => <SignIn />} />
            <Route exact path="/sign-up" render={() => <SignUp />} />
            <Route exact path='/home' render={()=><Home/>}/>
            {/* <Route component={<SignUp/>}/> */}
        <SignUp/>
    </Switch>
  )
}

export default App;
