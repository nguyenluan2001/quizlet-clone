import React,{useState,useEffect} from 'react'
import {Route,Redirect} from "react-router-dom"
import {auth} from "../services/firebase"
import { useJwt } from "react-jwt";
import Cookies from 'js-cookie';
import {firestore} from "../services/firebase"
function PrivateRoute({component:Component,...rest}) {
  let token=Cookies.get("token")
  const { decodedToken, isExpired } = useJwt(token);
  const [user,setUser]=useState(null)
  useEffect(()=>{
    if(decodedToken)
    {
      firestore.collection("users").doc(decodedToken.id).get().then(user=>{
        console.log(user)
        setUser(user)
      })
      .catch(err=>{
        console.log(err)
      })
  
    }
  },[])

    return (
      <Route
      {...rest}
      render={({props})=>{
        return auth.currentUser?.uid?<Component {...rest} {...props}></Component>:<Redirect to="/vi"></Redirect>
      }}
      >

      </Route>
    )
}

export default PrivateRoute
