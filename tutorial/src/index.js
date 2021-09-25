import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div className="">
      <article>
        <h1>hello world</h1>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
          <img src="" alt="" />
          <input type="text" />
        </ul>
      </article>
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
