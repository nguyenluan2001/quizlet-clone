import React,{useState} from 'react'
import Login from '../sign/scenes/login/Login'
import Register from '../sign/scenes/register/Register'
import Header from './components/header/Header'


function Homepage() {
    const [sign,setSign]=useState("")
    return (
        <div>
            <Header setSign={setSign} ></Header>
            {sign=="login"&&<Login setSign={setSign} sign={sign}></Login>}
            {sign=="register"&&<Register setSign={setSign} sign={sign}></Register>}

        </div>
    )
}

export default Homepage
