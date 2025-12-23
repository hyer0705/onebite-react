import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, date }) => {
  return (
    <div className="TodoItem">
      <input readOnly checked={isDone} type="checkbox" />
      <div className="item">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
