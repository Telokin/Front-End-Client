import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import DataManager from "./components/DataManager";
import Home from "./MainPage";
import history from './history';
import Login from "./Login/Login";
import Signin from "./Login/Signin"
import GoogleLogin from "./Login/GoogleLogin";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Car-Rental" component={DataManager} />
                    <Route path="/Login" component={Login}/>
                    <Route path="/Login" component={Signin}/>
                    <Route path="/sign-up" component={GoogleLogin}/>
                </Switch>
            </Router>
        )
    }
}