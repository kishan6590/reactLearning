const App = () => {
  return React.createElement(
    "div",
    {}, //config,attributes
    React.createElement("h1", {}, "Chai, Chill aur Rect-18") //children
  );
};  

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);


root.render(React.createElement(App));
