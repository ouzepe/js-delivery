import React from "react";
import Nav from "../../Common/Nav/Nav";


function Menu() {
  const Lists = [
    {name: "Home", path: "/"},
    {name: "Service", path: "/service"},
    {name: "About", path: "/about"},
    
  ];
  const contact = [
    {name: "Contact", path: "/contact"}
  ];
  
  return (
    <Nav Title="JS DELIVERY" Lists={Lists} contacts={contact}/>
  );
}

export default Menu;
