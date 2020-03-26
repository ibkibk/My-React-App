import React, { Component } from "react";
import style from "../BookList/BookList.module.scss";
import BookCard from "../BookCard/BookCard";



const BookList = (props) => {

    return (
        <div className={style.list}>

            {
                props.books.map((book, i) => {
                    return <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        published={book.volumeInfo.publishedDate}
                    />
                })
            }
        </div>
    )
}

export default BookList;