//2 way binding

import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setName("");
      }}
    >
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        name=""
        id=""
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
