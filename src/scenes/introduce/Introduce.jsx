import React,{useState} from 'react'
import Login from '../sign/scenes/login/Login'
import Register from '../sign/scenes/register/Register'
import Header from './components/header/Header'
import {auth} from "../../services/firebase"

import { useJwt } from "react-jwt";
import Cookies from 'js-cookie';
function Homepage() {
    const [sign,setSign]=useState("")
    let token=Cookies.get("token")
    const { decodedToken, isExpired } = useJwt(token);

    console.log(decodedToken)
    return (
        <div>
            <Header setSign={setSign} ></Header>
            {sign=="login"&&<Login setSign={setSign} sign={sign}></Login>}
            {sign=="register"&&<Register setSign={setSign} sign={sign}></Register>}

        </div>
    )
}

export default Homepage
