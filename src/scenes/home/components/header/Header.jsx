import React from 'react'
import { Container, Logo, Navbar, NavbarLeft, NavbarRight } from "./style"
function Header() {
    return (
        <Container>
            <Logo>
                <span className="logo">Quizlet</span>
            </Logo>
            <Navbar>
                <NavbarLeft>
                    <span className="home">Trang chủ</span>
                    <div class="dropdown">
                        <button class="create-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tạo
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Học phần</a>
                            <a class="dropdown-item" href="#">Thư mục</a>
                            <a class="dropdown-item" href="#">Lớp</a>
                        </div>
                    </div>
                </NavbarLeft>
                <NavbarRight>
                    <div className="search">
                        <input type="text" />

                    </div>
                    <button>Đăng nhập</button>
                    <button>Đăng ký</button>
                </NavbarRight>
            </Navbar>

        </Container>
    )
}

export default Header
