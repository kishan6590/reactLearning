import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { useSpecialChai } from "./hooks/useSpecialChai.js";

function App() {
  // this is how we are using custom hooks
  const { chai, loading, error } = useSpecialChai();
  console.log("chai", chai);

if(loading) return <h1>loading...</h1>
if(error) return <h1>Error:{error}</h1>

  return (
    <>
      <div>App</div>
      <h1>{chai?.data.content}</h1>

      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

      <Link to="/Home">Home</Link>
      <Link to="/home/about">About</Link>
      <Link to="/home/contact">Contact</Link>
    </>
  );
}

export default App;
