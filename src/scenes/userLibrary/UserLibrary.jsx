import React from 'react'
import { Switch, Route, Link, NavLink } from "react-router-dom"
import { auth } from "../../services/firebase"
import Folder from './components/folder/Folder'
import { Container, TopContent,MainContent } from "./style"
function UserLibrary(props) {
    const {path}=props.match
    console.log(props)
    return (
        <Container>
            <TopContent>
                <div className="user-info">
                    <img src="https://assets.quizlet.com/a/j/dist/i/animals/14.3d9afcb8dbe2d77.jpg" alt="" />
                    <p className="displayName">{auth.currentUser.displayName}</p>
                </div>
                <div className="library">
                    <NavLink activeClassName="active" className="item" to={`${path}`} exact>Học phần</NavLink>
                    <NavLink activeClassName="active" className="item" to={`${path}/folders`}>Thư mục</NavLink>
                    <NavLink className="item" to={`${path}/classes`}>Lớp học</NavLink>
                </div>
            </TopContent>
            <MainContent>
                <Switch>
                    <Route path={`${path}`} exact>
                        <p>course</p>
                    </Route>
                    <Route path={`${path}/folders`} exact component={Folder}></Route>
                </Switch>
            </MainContent>

        </Container>
    )
}

export default UserLibrary
