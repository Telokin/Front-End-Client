import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './history';
import "./MainPage.css";

export default class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
                <div className="lander">
                    <h1>Rent Car</h1>
                    <p>Car rental for businesses and individuals</p>
                    <form>
                        <Button variant="btn btn-success" onClick={() => history.push('/Car-Rental')}>Click button to view products</Button>
                    </form>
                </div>
            </div>
        );
    }
}