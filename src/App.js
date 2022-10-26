import "./App.css";
import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import TodoList from "./components/TodoList";
import Input from "./components/Input";

function App() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ input }));
    setInput("");
  };

  return (
    <div className="App">
      <Input input={input} setInput={setInput} addTodo={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
