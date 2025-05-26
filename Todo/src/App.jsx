import { useState } from "react";
const App = () => {
  const [inputValue, setInputValue] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleOnClick = function () {
    const allTasks = [...tasks, { task: inputValue }];
    setTasks(allTasks);
    setInputValue("");
  };
  function deleteTask(index) {
    const copyTasks = [...tasks];
    copyTasks.splice(index, 1);
    setTasks(copyTasks);
  }
  return (
    <>
      <div className="addTask">
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          id="task"
          name="task"
        />
        <button onClick={handleOnClick}>Add Task</button>
      </div>
      <div className="taskList">
        {tasks.length > 0 ? (
          tasks.map((elem, index) => {
            return (
              <h3 key={index}>
                {elem.task}{" "}
                <button className="delBtn" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </h3>
            );
          })
        ) : (
          <h1>Add Your Task here</h1>
        )}
      </div>
    </>
  );
};

export default App;
