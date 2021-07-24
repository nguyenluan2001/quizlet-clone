import React, { useState } from 'react'
import { Container, Logo, Navbar, NavbarLeft, NavbarRight } from "./style"
import { FaSearch,FaAngleDown } from "react-icons/fa"
import {Link} from "react-router-dom"
function Header() {
    const [showLibrary, setShowLibrary] = useState(false)
    return (
        <Container>
            <Logo>
                <span className="logo">Quizlet</span>
            </Logo>
            <Navbar>
                <NavbarLeft>
                    <span className="home">Trang chủ</span>
                    <div class="dropdown library">
                        <div className="title" onClick={()=>setShowLibrary(pre=>!pre)}>
                            Thư viện của bạn
                            <FaAngleDown></FaAngleDown>
                        </div>
                        {showLibrary && <div className="dropdown-content">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#course" role="tab" aria-controls="home" aria-selected="true">Học phần</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#explain" role="tab" aria-controls="profile" aria-selected="false">Giải thích</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#folder" role="tab" aria-controls="contact" aria-selected="false">Thư mục</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#class" role="tab" aria-controls="contact" aria-selected="false">Lớp học</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="course" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="item">
                                        <p className="course-name">demo</p>
                                        <div className="info">
                                            <img src="https://assets.quizlet.com/a/j/dist/i/animals/14.3d9afcb8dbe2d77.jpg" alt="" />
                                            <span className="user-name">luannguyen</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <p className="course-name">demo</p>
                                        <div className="info">
                                            <img src="https://assets.quizlet.com/a/j/dist/i/animals/14.3d9afcb8dbe2d77.jpg" alt="" />
                                            <span className="user-name">luannguyen</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="explain" role="tabpanel" aria-labelledby="profile-tab">456</div>
                                <div class="tab-pane fade" id="folder" role="tabpanel" aria-labelledby="contact-tab">789</div>
                                <div class="tab-pane fade" id="class" role="tabpanel" aria-labelledby="contact-tab">6575673</div>
                            </div>

                        </div>}
                    </div>
                    <div class="dropdown">
                        <button class="create-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tạo
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link class="dropdown-item" to="/create-set">Học phần</Link>
                            <Link class="dropdown-item" to="/create-set">Thư mục</Link>
                            <Link class="dropdown-item" to="/create-set">Lớp</Link>
                        </div>
                    </div>
                </NavbarLeft>
                <NavbarRight>
                    <div className="search">
                        <input type="text" placeholder="Tìm kiếm" />
                        <span className="icon">
                            <FaSearch></FaSearch>
                        </span>
                    </div>

                </NavbarRight>
            </Navbar>

        </Container>
    )
}

export default Header
