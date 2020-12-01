import React, { useState } from "react";

import Title from "./components/title/Title";
import Form from "./components/form/Form";
import Todo from "./components/todo/Todo";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <React.Fragment>
      <Title />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      {todos.map((todo) => (
        <Todo key={todo.id} todos={todos} setTodos={setTodos} text={todo} />
      ))}
    </React.Fragment>
  );
};

export default App;
