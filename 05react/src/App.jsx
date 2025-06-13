import { useState, useEffect } from "react";

export function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to load"));
  }, []);

  return (
    <div>
      <h1>Welcome to chaicode</h1>
      <p>Serving hot chai with react</p>
      <h2>{message}</h2>
    </div>
  );
}
