import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Login from "../component/Login/Login";




export default class Routes extends Component {
    render() {
        return (
            <Router>
              
              <Login path="login" signIn={this.signIn}/>
               
            </Router>
        )
    }
}