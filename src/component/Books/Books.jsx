import React, { Component } from "react";
import style from "../Books/Books.module.scss";
import SearchBar from "../BookList/SearchBar/SearchBar";
import request from "superagent";
import BookList from "../BookList/BookList";


export default class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            searchField: "",
        }
    }


    searchBook = (e) => {
        e.preventDefault();
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: this.state.searchField })
            .then((data) => {
                      if (data.body.totalItems !== 0) {
                          this.setState({ books: [...data.body.items] });
                      }
        
            })
    }
    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
        // console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <SearchBar searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <BookList books={this.state.books} />
            </div>
        )
    }
}

