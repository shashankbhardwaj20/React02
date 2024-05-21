import React from "react"; 
import ReactDOM from "react-dom/client";

const headingR = React.createElement("h1",{id:"main-heading"},"Hello world from React!");
// console.log(headingR);
//  1) Note React.createElement will give an object having props which consist to children and attributes
//     It is the responsibility if render method to make a h1 element out of it.
//  2) This {} in createElement is to give attributes to tags like id ,classname etc.

const nested_divs = React.createElement(
    "div",
    {id:"parent-div"},
    [
        React.createElement(
            "div",
            {id:"child-div-1"},
            [
                React.createElement("h1",{id:"child1-div-h1"},"I am an H1 tag"),
                React.createElement("h2",{id:"child1-div-h2"},"I am an H2 tag")
            ]
        ),
        React.createElement(
            "div",
            {id:"child-div-2"},
            [
                React.createElement("h1",{id:"child2-div-h1"},"I am an H1 tag"),
                React.createElement("h2",{id:"child2-div-h2"},"I am an H2 tag")
            ]
        )
    ]
);
console.log(nested_divs);
const Root = ReactDOM.createRoot(document.getElementById("root1"));
Root.render(
    headingR
);
