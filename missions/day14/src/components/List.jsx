import "./List.css";
import TodoItem from "./TodoItem";

const List = () => {
  return (
    <div className="List">
      <h4>Todo List ✅</h4>
      <div className="todo_wrapper">
        <input className="search" type="text" placeholder="검색어를 입력하세요" />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default List;
