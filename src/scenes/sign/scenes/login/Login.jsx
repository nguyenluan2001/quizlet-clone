import React from 'react'
import Layout from '../../components/layout/Layout'
import {SocialLogin,Form} from "./style"
function Login({ setSign, sign }) {
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
            <Form>
                <div className="form-group">
                    <input type="text" placeholder="ĐIỀN TÊN NGƯỜI DÙNG"/>
                    <label htmlFor="">TÊN NGƯỜI DÙNG</label>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="***"/>
                    <label htmlFor="" >MẬT KHẨU</label>
                </div>
                <div className="login-btn">
                    Đăng nhập
                </div>
            </Form>
        </Layout>
    )
}

export default Login
