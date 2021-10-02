import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';
// setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71Ptolb7qnL._AC_UL160_SR160,160_.jpg",
  title: "Peril",
  author: 'Bob Woodward',
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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sapiente facilis distinctio quos minima deserunt voluptatibus ipsum explicabo aliquam repudiandae.
        </p>
      </Book>

      <Book 
        img={secondBook.img} 
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const {img, title, author, children} = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      {children}
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
