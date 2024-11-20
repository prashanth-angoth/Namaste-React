
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { class: "head" },
  "hello World from react"
); // the empty object here is used for to give attributes to the tag eg:id, class
// ex: React.createElement("h1", {id:"heading"}, "hello World from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// creating nested html elements structure using React look as follows
{
  /* <div id="parent">
    <div id="child">
        <h1>I am a H1 tag</h1>
    </div>
</div> */
}
// here in the below line parent receives an Object not any element in React while it is getting rendering
// on to the DOM it converts it self into an HTMl
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an H1 tag")
  )
);
console.log(parent);
root.render(parent);
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// creating nested html elements structure with siblings using React look as follows
{
  /* <div id="parent">
    <div id="child">
        <h1>I am a H1 tag</h1>
        <h1>I am a H2 tag</h1>
    </div>
</div> */
}
const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h1", {}, "I am an H2 tag"),
  ])
);
console.log(parent2);
root.render(parent2);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// creating nested html elements structure with siblings using React look as follows
{
  /* <div id="parent">
    <div id="child1">
        <h1>I am a H1 tag</h1>
        <h1>I am a H2 tag</h1>
    </div>
    <div id="child2">
        <h1>I am a H1 tag</h1>
        <h1>I am a H2 tag</h1>
    </div>
</div> */
}
const parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h1", {}, "I am an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h1", {}, "I am an H2 tag"),
  ]),
]);
console.log(parent3);
root.render(parent3);
