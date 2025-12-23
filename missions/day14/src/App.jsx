import "./App.css";
import { useState, useRef } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { mockTodos } from "./data/mockData";

function App() {
  const [todos, setTodos] = useState(mockTodos);
  const nextId = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: nextId.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
