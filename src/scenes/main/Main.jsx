import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "../../components/header/Header"
import CreateSet from '../createSet/CreateSet'
import Latest from '../latest/Latest'
import { Provider } from "react-redux"
import { store } from "../../services/store"
function Main() {
    return (
        <Provider store={store}>
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/latest" component={Latest}></Route>
                    <Route path="/create-set" component={CreateSet}></Route>
                </Switch>
            </Router>
        </Provider>
    )
}

export default Main
