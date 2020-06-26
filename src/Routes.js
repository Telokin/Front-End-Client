import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import DataManager from "./Components/DataManager";
import Home from "./MainPage";
import history from './history';
import GoogleLogin from "./Login/GoogleLogin";
import CarTable from "./Components/CarTable";
import CarAvailable from "./Components/CarAvailable";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Car-Rental" component={DataManager} />
                    <Route path="/Login" component={GoogleLogin}/>
                    <Route path="/Place/:id" component={CarAvailable}/>
                </Switch>
            </Router>
        )
    }
}