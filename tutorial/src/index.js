import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';
// setup vars
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71Ptolb7qnL._AC_UL160_SR160,160_.jpg",
    title: "Peril",
    author: 'Bob Woodward',
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81X+TLMA8oL._AC_UL160_SR160,160_.jpg",
    title: "The Sandman: Act II",
    author: 'Neil Gaiman',
  },
]

function BookList() {
  return (
    <section className='booklist'> 
      {books.map((book) => {
        const {img, title, author} = book
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props.book;
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
