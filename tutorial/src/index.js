import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';
// setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71Ptolb7qnL._AC_UL160_SR160,160_.jpg",
  title: "Bob Woodward",
  author: 'Peril',
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81X+TLMA8oL._AC_UL160_SR160,160_.jpg",
  title: "The Sandman: Act II",
  author: 'Neil Gaiman',
}


function BookList() {
  return (
    <section className='booklist'> 
      <Book 
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
       <Book 
         img={secondBook.img} 
         title={secondBook.title}
         author={secondBook.author}
        />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img
        src={props.img} alt="" />
      <h4>{props.title}</h4>
      <h1>{props.author}</h1>
      
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
