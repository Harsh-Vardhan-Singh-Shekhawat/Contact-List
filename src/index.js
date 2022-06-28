import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import "./components/styles.css"
import Header from "./components/Heading";

ReactDOM.render(  
<div>
  <Header />

  <App name = "Aryan" number ="1234567890" email="abc@gmail.com"/>
  <App name = "Anmol" number ="9876543210" email="xyz@hotmail.com"/>
  <App name = "Ronak" number ="9998882221" email="abc@yahoo.com"/>
  <App name = "Nishant" number ="9923764888" email="pqr@gmail.com"/>
  <App name = "Gandak" number ="9946474r21" email="asd@yahoo.com"/>

</div>,
  document.getElementById("root")
);