import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';
// setup vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/71Ptolb7qnL._AC_UL160_SR160,160_.jpg",
    title: "Peril",
    author: 'Bob Woodward',
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81X+TLMA8oL._AC_UL160_SR160,160_.jpg",
    title: "The Sandman: Act II",
    author: 'Neil Gaiman',
  },
]

function BookList() {
  return (
    <section className='booklist'> 
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({img, title, author}) => {
  // attribute, eventHandler
  // Onclick, OnMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };

  const complexeExample = (author) => {
    console.log(author);
  }

  return (
    <article className='book' onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>reference example</button>
      <button type="button" onClick={() => complexeExample(author)}>more complex example</button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
