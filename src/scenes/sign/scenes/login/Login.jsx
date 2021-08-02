import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import { SocialLogin, Form } from "./style"
import { useAuth } from "../../../../services/authContext"
import axios from "axios"
import {auth} from "../../../../services/firebase"
function Login({ setSign, sign }) {
    const { login } = useAuth()
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    function handleInput(e) {
        setInput(pre => {
            return { ...pre, [e.target.name]: e.target.value }
        })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        await login(input.email,input.password)

        axios({
            url: "http://localhost:5000/auth",
            method:"post",
            data: {
               id:auth.currentUser.uid
            },
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => {
            document.cookie=`token=${res.data}`
            console.log(res.data)
        })
    }
    return (
        <Layout setSign={setSign} sign={sign}>
            <SocialLogin>
                <div className="item">
                    <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png" alt="" />
                    <span>Đăng nhập với Google</span>
                </div>
                <div className="item">
                    <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Facebook_icon-icons.com_66805.png" alt="" />
                    <span>Đăng nhập với Facebook</span>
                </div>
            </SocialLogin>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="ĐIỀN EMAIL NGƯỜI DÙNG" name="email" onChange={(e) => handleInput(e)} />
                    <label htmlFor="">EMAIL NGƯỜI DÙNG</label>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="***" name="password" onChange={(e) => handleInput(e)} />
                    <label htmlFor="" >MẬT KHẨU</label>
                </div>
                <button className="login-btn">
                    Đăng nhập
                </button>
            </Form>
        </Layout>
    )
}

export default Login
