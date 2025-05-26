import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    console.log("Hi");
    return function () {
      console.log("unmount");
    };
  }, []);
  return <div>Home</div>
}

export default Home;
