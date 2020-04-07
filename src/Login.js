import './Login.css'
import React, { Component } from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton} from "react-social-login-buttons";



class Login extends Component {
    render() {
        return (
            <Form className="app">
                <h1><span className="font-weight-bold text-center">RentCars</span>.com
                </h1>
                <h2 className="text-center">Welcome</h2>
                <FormGroup>
                    <label>Email</label>
                    <Input type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <label>Password</label>
                    <Input type="password" placeholder="Password"/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">Log in</Button>
                <div className="text-center pt-3">
                    Albo kontynuuj przez FaceBook'a
                </div>
                <FacebookLoginButton className="mt-3 mb-3"/>
                <div className="text-center">
                    <a href="/sign-up">Zarejestruj sie</a>
                    <span className="p-2">|</span>
                    <a href="/forgot-password">Zresetuj haslo</a>
                </div>
            </Form>
        );

    }
}
export default Login;
