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

  const onUpdate = (targetId) => {
    setTodos(todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter(({ id }) => id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
