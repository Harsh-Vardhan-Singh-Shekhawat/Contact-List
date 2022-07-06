import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import "./components/styles.css"
import Header from "./components/Heading";

ReactDOM.render(  
<div>
  <Header />
  <App />
</div>,
  document.getElementById("root")
);