import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput("");
    } else {
      alert("Please enter a task");
    }
  };

  const editTask = (index) => {
    const newTaskText = prompt("Edit your task:", tasks[index]);
    if (newTaskText) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newTaskText;
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">TODO LIST</h2>
      <div className="d-flex mb-3">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
          className="form-control"
          placeholder="Enter a Task"
        />
        <button className="btn btn-primary ms-2" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{task}</span>
            <div>
              <button className="btn btn-warning me-2" onClick={() => editTask(index)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
