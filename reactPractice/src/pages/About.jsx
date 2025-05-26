import React from "react";
import { useContext } from "react";
import { userContext } from "../context/context.js";
function About() {
  const userName = useContext(userContext)
  return (
    <div>
      About
      <h1>My name is {userName}</h1>
    </div>
  );
}

export default About;
