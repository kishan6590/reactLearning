import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Learnign Home</div>
      <Outlet />
    </>
  );
}

export default Home;
