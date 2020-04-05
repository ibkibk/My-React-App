import React, { Component } from "react";
import styles from "./NotFound.module.scss";

export default class NotFound extends Component {
    render() {
        return (
            <div className={styles.NotFound}>
                <p>Oops! That page can not be found.</p>
            </div>
        );
    }
}