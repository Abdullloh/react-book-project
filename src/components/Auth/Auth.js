import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import {Switch,Route} from 'react-router-dom'
import ModeContext, { themes } from '../../Context/mode-context'
export default function Auth() {
    return (
      <ModeContext.Provider value={themes}>
        <Switch>
            <Route exact path="/sign-in" render={() => <SignIn />} />
            <Route exact path="/sign-up" render={() => <SignUp />} />
       </Switch>
      </ModeContext.Provider>
    )
}
