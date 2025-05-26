import React, { useState } from "react";
import Form from "./components/Form.jsx";
import Cards from "./components/Cards.jsx";
import Header from "./components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";

const App = () => {
  // const [name, setName] = useState("Kishan");
  // const lName = () => {
  // setName("Thapa");
  // console.log("Clicked");
  // };
  const users = [
    {
      id: 1,
      name: "Aarav Mehta",
      age: 28,
      profession: "Software Engineer",
      city: "Bangalore",
      profileImage: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Simran Kaur",
      age: 25,
      profession: "UI/UX Designer",
      city: "Delhi",
      profileImage: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Rohan Sharma",
      age: 32,
      profession: "Product Manager",
      city: "Mumbai",
      profileImage: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Neha Verma",
      age: 27,
      profession: "Data Analyst",
      city: "Pune",
      profileImage: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Kunal Joshi",
      age: 30,
      profession: "DevOps Engineer",
      city: "Hyderabad",
      profileImage: "https://via.placeholder.com/150",
    },
  ];

  return (
    // <div>
    //   <h1>Hi My name is {name} </h1>
    //   <button onClick={lName}>Click Me</button>
    //   <Form />
    // </div>

    // <div className="cards">
    //   {/* {propdrilling } */}
    //   {users.map((user) => {
    //    return <Cards key={user.id}
    //       name={user.name}
    //       age={user.age}
    //       profession={user.profession}
    //       city={user.city}
    //       photo={user.profileImage}
    //     />;
    //   })}
    // </div>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
