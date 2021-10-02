import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';
function BookList() {
  return (
    <section className='booklist'> 
      <Book />
    </section>
  );
}

const author = 'Peril';

const Book = () => {
  const title = 'Bob Woodward'
  return (
    <article className='book'>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71Ptolb7qnL._AC_UL160_SR160,160_.jpg"
        alt=""
      />
      <h4>{title}</h4>
      <h1>{author.toUpperCase()}</h1>
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
