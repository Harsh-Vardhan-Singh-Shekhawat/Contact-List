import React from "react";

export default function App(props){
    return <div>
        <h1>My Contact</h1>
        <div className="Card">
            <div className="top">
                <h2>{props.name}</h2>
                <img src ="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt ="random=img"/>
            </div>
            <div className="bottom">
                <p>{props.number}</p>
                <p>{props.email}</p>
            </div>
        </div>
    </div>
    
}