import React from 'react'
import {Container,Banner,Content} from "./style.js"
import {FaTimes} from "react-icons/fa"
function Layout({children,setSign,sign}) {
    return (
        <Container>
            <Banner></Banner>
            <Content>
                <div className="signs">
                    <p className={sign=="register" && 'active'} onClick={()=>setSign("register")}>Đăng ký</p>
                    <p className={sign=="login" && 'active'}  onClick={()=>setSign("login")}>Đăng nhập</p>
                </div>
                {children}
                <span className="close" onClick={()=>setSign("")}>
                    <FaTimes></FaTimes>
                </span>
            </Content>
            
        </Container>
    )
}

export default Layout
