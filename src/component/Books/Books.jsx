import React, { Component } from "react";
import style from "../Books/Books.module.scss";
import SearchBar from "../BookList/SearchBar/SearchBar";
import request from "superagent";
import BookList from "../BookList/BookList";


export default class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books:[],
            searchField:""
        }
    }
   

    searchBook = (e) =>{
        e.preventDefault();
        request
           .get('https://www.googleapis.com/books/v1/volumes')
           .query({ q: this.state.searchField })
           .then((data) =>{
               this.setState({books: [...data.body.items]})
           })
    }
    handleSearch = (e) =>{
        this.setState({searchField:e.target.value})
    }

    // componentDidMount(){
    //     fetch('https://www.googleapis.com/books/v1/volumes')
    //       .then(res =>res.json())
    //       .then(data=>this.setState({ books:data }))
    // }
    render(){
        return(
            <div>
             <SearchBar searchBook={this.searchBook} handleSearch={this.handleSearch}/>
             <BookList books={this.state.books}/>
            </div>
        )
    }
}

