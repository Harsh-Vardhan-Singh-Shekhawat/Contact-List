import React from "react";
import "./styles.css";
import Card from "./card";
import contact from "./contacts";

function createCard(contact){
    return <Card 
        key= {contact.email}
        name={contact.name}
        number= {contact.number}
        email= {contact.email}
    />;
}


export default function App(){
    return <div className="div ">
    {contact.map(createCard)}
    {/* <Card
name = {contact[0].name} 
number = {contact[0].number}
email = {contact[0].email}  
/>
<Card
name = {contact[1].name} 
number = {contact[1].number}
email = {contact[1].email}  
/>  
<Card
name = {contact[2].name} 
number = {contact[2].number}
email = {contact[2].email}  
/>  
<Card
name = {contact[3].name} 
number = {contact[3].number}
email = {contact[3].email}  
/>  
<Card
name = {contact[4].name} 
number = {contact[4].number}
email = {contact[4].email}  
/>  */}
    </div>
    
}
