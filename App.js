import React from "react";
import ReactDOM  from "react-dom/client";
import {BiUserCircle} from "react-icons/bi"
import "./App.css"

// const value=2222;
// const Element=()=>
// {
//        return  (<h1>im  an element</h1>)
// }
// const heading=(
//        <h1 id="title">
//        THIS IS SOMETHING NEW{value}
//        {Element()}

//        </h1>
//        );
// const Title=()=>{
//        return <div>
//               <h2>Bye</h2>
//               {heading}
//               <Element/>

//        </div>
// }

// const HeadingComponent=()=>
// {
    
//        return <div> 
//               <h1>I m  a jsx code which function component written</h1>
//               {heading}
//               {value}
//               <Title/>
//        </div>
       
// }
// console.log(heading);
// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeadingComponent())

// --------------Assignment
// const container=React.createElement("div",{id:"title"},
//  [React.createElement("h1",{id:"heading1"},"i m heading 1"),
//  React.createElement("h1",{id:"heading2"},"i m heading 2"),
//  React.createElement("h1",{id:"heading2"},"i m heading 3")]

//  )

// const container=<div>
//        <h1> i m  heading1</h1>
//        <h2> i m heading2</h2>
//        <h3>i m heading3</h3>
// </div>

// const Title =()=>
// {
//        return <h1>byee</h1>
// }
// const Container=()=><div className="PARENT">
//        <h1> i m  heading1</h1>
//        <h2> i m heading2</h2>
//        <h3>i m heading3</h3>
//        {Title()}
// </div>
//  console.log(Container());

//  const root=ReactDOM.createRoot(document.getElementById("root"));
// //  root.render(container);
// root.render(<Container/>)

// ----------HEADER COMPONENT
const Navbar=()=>
{
       return   (
              <div className="container">
                     <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width={30} height={30} className="image"/>
                     <div className="bar">
                            <input type="text" placeholder="Searc Here" className="input_bar"/>
                     </div>
                     <BiUserCircle className="favicon"/>
              </div>
       )
}
console.log(<Navbar/>);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar/>)
