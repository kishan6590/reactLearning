import React from "https://esm.sh/react@19.1.0"
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"



const App = () => {
  return React.createElement(
    "div",
    {}, //config,attributes
    React.createElement("h1", {}, "Chai, Chill aur Rect-18") //children
  );
};    

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);//virtual dom 


root.render(React.createElement(App));
