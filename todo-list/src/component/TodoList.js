import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoApp = () => {
  const [taskInput, setTaskInput] = useState("");
  const [todos, setTodos] = useState([]);

  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

 
  const addTask = () => {
    const taskText = taskInput.trim();
    if (taskText !== "") {
      const newTask = { id: Date.now(), text: taskText };
      setTodos([...todos, newTask]);
      setTaskInput(""); 
    } else {
      alert("Please enter a task.");
    }
  };

 
  const editTask = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

 
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">TODO List</h2>
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a Task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <button className="btn btn-primary ms-2" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item task-item d-flex justify-content-between"
          >
            <span>{todo.text}</span>
            <div className="btn-group ms-2">
              <button
                className="btn btn-warning"
                onClick={() => {
                  const newTaskText = prompt("Edit your task:", todo.text);
                  if (newTaskText) {
                    editTask(todo.id, newTaskText);
                  }
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteTask(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;






