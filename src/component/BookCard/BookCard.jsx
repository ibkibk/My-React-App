import React, { Component } from "react";
import style from "../BookCard/BookCard.module.scss";



export default class BookCard extends Component {
 
    render() {
        return (
            <div className={style.container}>
                <section className={style.card}>
                <img src={this.props.image} alt="" />
                <div className={style.desc}>
                    <h2>{this.props.title}</h2>
                    <h3>by {this.props.author}</h3>

                    <p>Published Data: {this.props.published === '0000' ? 'not available': this.props.published.substring(0,4)}</p>
                </div>
                </section>
            </div>
        )
    }
}