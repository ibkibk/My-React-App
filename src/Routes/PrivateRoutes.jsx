import React, { Component } from "react";
import { globalHistory } from "@reach/router";
export default class PrivateRoutes extends Component {
    render() {
        console.log(this.props.user)
        if (!this.props.user) {
            globalHistory.navigate("/login");
            return null;
        } else {
            return this.props.children;
        }
    }
        
}