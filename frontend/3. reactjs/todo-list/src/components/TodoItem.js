import { HiOutlineTrash } from "react-icons/hi";

const TodoItem = ({ item, onCheck, onRemove }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={(e) => onCheck(item, e.target.checked)}
      />
      <div
        className={`todo-item-content ${item.isDone ? "todo-item-done" : ""}`}
      >
        <p className="todo-title">{item.title}</p>
        <p className="todo-description">{item.description}</p>
      </div>
      <HiOutlineTrash
        className="todo-remove-btn"
        size={24}
        color="tomato"
        onClick={() => onRemove(item.id)}
      />
    </div>
  );
};

export default TodoItem;
