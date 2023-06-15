import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";
import Header from "./Header";
import Footer from "./Footer";

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index}></Book>;
      })}
    </section>
  );
};

const Body = () => {
  return (
    <>
      <Header></Header>
      <BookList></BookList>
      <Footer></Footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Body></Body>);
