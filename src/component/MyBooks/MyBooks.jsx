import React, { Component } from "react";
import styles from "../MyBooks/MyBooks.module.scss";

export default class MyBooks extends Component{
    render(){
        return(
            <div>
             
            <div onClick={this.props.signOut} className={styles.google} >
                <button >Sign out!</button>
                
            </div>
            </div>
        
        );
    }
}