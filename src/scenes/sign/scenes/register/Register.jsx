import React, { useState,useContext } from 'react'
import Layout from '../../components/layout/Layout'
import { SocialRegister, Divide, Form } from "./style"
import {useAuth} from "../../../../services/authContext"
import {AuthContext} from "../../../../services/authContext"
function Register({ setSign, sign }) {
    let dates = []
    let months = []
    let years = []
    for (let i = 1; i <= 31; i++) {
        dates.push(i)
    }
    for (let i = 1; i <= 12; i++) {
        months.push(i)
    }
    for (let i = 2021; i >= 1892; i--) {
        years.push(i)
    }
    const [input, setInput] = useState({
        date: "",
        month: "",
        year: "",
        email: "",
        username: "",
        password: "",
        agree:""
    })
    const {register}=useAuth()
    function handleInput(e) {
        setInput(pre=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    function handleSubmit(e)
    {
        e.preventDefault()
        let birthday=input.date+"-"+input.month+"-"+input.year
        console.log(input)
        register(birthday,input.email,input.username,input.password).then(()=>{
            setSign("login")
        })
    }
    return (
        <Layout setSign={setSign} sign={sign}>
            <SocialRegister>
                <div className="item">
                    <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png" alt="" />
                    <span>Tiếp tục với Google</span>
                </div>
                <div className="item">
                    <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Facebook_icon-icons.com_66805.png" alt="" />
                    <span>Tiếp tục với Facebook</span>
                </div>
            </SocialRegister>
            <Divide>
                HOẶC EMAIL
            </Divide>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-group birth">
                    <label htmlFor="">VUI LÒNG NHẬP NGÀY SINH</label>
                    <div className="birthday">
                        <select name="date" id="" className="form-control" onChange={(e) => handleInput(e)}>
                            <option value="">Ngày</option>
                            {
                                dates.map(item => {
                                    return <option value={item}>{item}</option>
                                })
                            }

                        </select>
                        <select name="month" id="" className="form-control" onChange={(e) => handleInput(e)}>
                            <option value="">Tháng</option>
                            {
                                months.map(item => {
                                    return <option value={item}>{item}</option>
                                })
                            }

                        </select>
                        <select name="year" id="" className="form-control" onChange={(e) => handleInput(e)}>
                            <option value="">Năm</option>
                            {
                                years.map(item => {
                                    return <option value={item}>{item}</option>
                                })
                            }

                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">EMAIL</label>
                    <input type="email" name="email" className="form-control" placeholder="user@quizlet.com" onChange={(e) => handleInput(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">TÊN NGƯỜI DÙNG</label>
                    <input type="text" name="username" className="form-control" placeholder="andrew123" onChange={(e) => handleInput(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">MẬT KHẨU</label>
                    <input type="password" name="password" className="form-control" placeholder="*****" onChange={(e) => handleInput(e)} />
                </div>
                <div className="form-group">
                    <input type="checkbox" name="agree" onChange={(e) => handleInput(e)} />
                    <span>Tôi chấp thuận Điều khoản dịch vụ và chính sách quyền riêng tư của Quizlet</span>
                </div>
                <button className="register-btn ">Đăng ký</button>
                <div className="account-exist">Bạn đã có tài khoản rồi à? <span>Đăng nhập</span> </div>
            </Form>
        </Layout>
    )
}

export default Register
