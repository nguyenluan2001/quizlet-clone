import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "../../components/header/Header"
import CreateSet from '../createSet/CreateSet'
import Latest from '../latest/Latest'
import { Provider } from "react-redux"
import { store } from "../../services/store"
import PrivateRoute from '../../components/PrivateRoute'
import Detail from "../detail/Detail"
import {Container} from "./style"
function Main(props) {
    // useEffect(()=>{
    //     // console.log(window.screenY)
    //     window.addEventListener("scroll",()=>{
    //         console.log(window.scrollY)
    //     })
    // })
    return (
        <Container>
        <Provider store={store}>
                <Header ></Header>
                <Switch>
                    {/* <Route path="/latest"  component={Latest}>
                        <p>123</p>
                    </Route> */}
                    <PrivateRoute  path="/latest" exact  component={Latest}>
                    </PrivateRoute>
                    {/* <Route path="/create-set" exact  render={()=>{
                        return <CreateSet ></CreateSet>
                    }}></Route> */}
                    <Route path="/create-set" component={CreateSet}></Route>
                    <Route path="/:id/edit" exact component={CreateSet}></Route>
                    <PrivateRoute path="/:id/:type" component={Detail}></PrivateRoute>
                </Switch>
        </Provider>
        </Container>
    )
}

export default Main
