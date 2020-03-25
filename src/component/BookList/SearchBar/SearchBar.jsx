import React, { Component } from "react";
import style from "../SearchBar/SearchBar.module.scss";


export default class SearchBar extends Component {
    render(){
        return(
            <div className={style.searchBar}>
                <form className={style.search} onSubmit={this.props.searchBook} action="">
                    <input className={style.text} onChange={this.props.handleSearch} type="text"/>
                    <button type="submit">search</button>
                </form>
            </div>
        )
    }
}