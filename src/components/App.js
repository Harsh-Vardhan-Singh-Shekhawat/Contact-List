import React from "react";
import "./styles.css"

export default function App(props){
    return <div className="div">
        
        <div className="card">
            <div className="container">
                <img className="img" src ="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt ="random=img"/>
                <h2 className="name">{props.name}</h2>
                
            </div>
            <div className="sub-container">
                <p className="info"><b>Mobile :- </b> +91 {props.number}</p>
                <p className="info"><b>Email :- </b>{props.email}</p>
            </div>
        </div>
    </div>
    
}