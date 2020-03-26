import React, { Component } from "react";
import style from "../NavItems/NavItems.module.scss";
import { Link } from "@reach/router";


export default class NavItems extends Component {
    render() {
        return (
            <div className={style.navItems}>
                <ul>
                    <li>LOGIN</li>
                    <li>MY BOOKS</li>
                    <li>BESTSELLERS</li>
                    <li>NON-FINCTION</li>
                    <li>FICTION</li>
                </ul>
            </div>
       
        )
    }
}