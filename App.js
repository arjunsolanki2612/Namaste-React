// 1. We will create a heading using react //2. we will create a root using
// 2. react dom because we have to render the heading inside the root and show it to
// 3. browser and all dom related thing is done by React-Dom //3. render the heading

// React.createElement --> it is an object and things inside this are its props
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

console.log(heading); // it is an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
