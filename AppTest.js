import React from "react";
import ReactDOM from "react-dom/client";

// 1. We will create a heading using react //2. we will create a root using
// 2. react dom because we have to render the heading inside the root and show it to
// 3. browser and all dom related thing is done by React-Dom //3. render the heading

// React.createElement --> it is an object and things inside this are its props
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

//JSx => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)

const Title = () => {};

// This is called component composition -> when one component is within another component
const HeadingComponent = () => {
  <Title />;
};
const heading1 = <h1 className="heading">Namaste react</h1>;

console.log(heading); // it is an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
