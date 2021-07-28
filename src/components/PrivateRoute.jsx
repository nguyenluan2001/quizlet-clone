import React from 'react'
import {Route,Redirect} from "react-router-dom"
import {auth} from "../services/firebase"
function PrivateRoute({component:Component,...rest}) {
    return (
      <Route
      {...rest}
      render={({props})=>{
        return auth.currentUser!=null?<Component {...rest} {...props}></Component>:<Redirect to="/vi"></Redirect>
      }}
      >

      </Route>
    )
}

export default PrivateRoute
