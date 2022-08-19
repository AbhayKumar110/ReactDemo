import React from "react";
import ReactDOM from "react-dom";
// import youtuber, { favprog, myname } from "./App";
import * as Abh from "./App";

ReactDOM.render(
  <>
    <ol>
      <li>ABHAY</li>
      <li>KUMAR</li>
      <li>DUBEY</li>
      <li>{Abh.default}</li>
      <li>{Abh.favprog}</li>
      <li>{Abh.myname()}</li>
    </ol>
  </>,
  document.getElementById("root")
);
