// const heading = React.createElement("h1", { id: "head-1" }, "Hello");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);

// root.render(heading);

{
  /* <div id='parent'>

  <div id='child'>
     <h1>Hello</h1>
     <h1>Bye</h1>
  </div>

</div> */
}

let greetings = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "Heading-1" } , 'Hello'),
    React.createElement("h1", { id: "Heading-2" } , 'Bye')
  ])
);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(greetings);

// JSX
