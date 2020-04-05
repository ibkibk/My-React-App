import React, { Component } from "react";
import { firestore } from "../../firebase";
import style from "../AddBook/AddBook.module.scss"

export default class CreateCard extends Component {
    state = {
        formData: {
            author: "",
            title:"",
            picture: ""
        }
     
    }

    handleSubmit = (event) => {
        event.preventDefault();
        firestore
            .collection("users")
            .doc(this.props.user.uid)
            .set(this.state.formData)
            .then(() => {
                console.log("it worked")
            })
    }
    render() {
        return (
            <form className={style.sty} onSubmit={this.handleSubmit}>
                <h1>Add books</h1>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={this.state.formData.name}
                    onChange={this.handleInputChange}
                />
            
                <input type="submit" value="add" />
            </form>

        )
    }
}