import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import Login from "../component/Login/Login";
import firebase, { providers } from "../firebase";
import PrivateRoutes from "./PrivateRoutes";
import MyBooks from "../component/MyBooks/MyBooks";
// import Books from "../component/Books/Books";
import style from "./Routes.module.scss";
import BookList from "../component/BookList/BookList";
import NotFound from "../component/NavBar/NotFound/NotFound";
import AddBook from "../component/AddBook/AddBook"






export default class Routes extends Component {
    state = {
        user: null
    }
    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)

            .then(result => {
              
                this.setState({ user: result.user })
              
            })
            .then(result => {
                globalHistory.navigate("private/mybooks")
            })
            .catch(error => {
                console.log(error);
            })
    }
    signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({ user: null });
                globalHistory.navigate("/login");
            })
    }

    render() {
        console.log(this.state.user)
        return (
            <Router className={style.router}>
                <BookList  path="booklist"/>
                {/* <Books path="books"/> */}
                <NotFound path="default"/>
                {/* <Login path="login" signIn={this.signIn} /> */}
                <AddBook path="addbook"/>
                <PrivateRoutes path="private" user={this.state.user}>
                   
                    {/* <MyBooks path="mybooks" signOut={this.signOut} /> */}
                </PrivateRoutes>

            </Router>
        )
    }
}