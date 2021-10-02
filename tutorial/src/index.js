import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';
function BookList() {
  return (
    <section className='booklist'> 
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71Ptolb7qnL._AC_UL160_SR160,160_.jpg"
    alt=""
  />
);
const Title = () => <h1>Peril</h1>;
const Author = () => {
  return <h4 style={{color:'#617d98', fontSize: '0.75rem', margin: '0.25rem'}}>Bob Woodward</h4>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
