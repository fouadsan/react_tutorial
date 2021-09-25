import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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
  return <h4>Bob Woodward</h4>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
