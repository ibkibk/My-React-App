import React, { Component } from "react";
import style from "../NavItems/NavItems.module.scss";
import { Link } from "@reach/router";


export default class NavItems extends Component {
    render() {
        return (
            <div className={style.navItems}>
                <p className={style.navItem} onClick={this.props.toggleMenu}>
                    <Link className={style.item} to={this.props.route}>{this.props.name}</Link>
                </p>
            </div>

        )
    }
}