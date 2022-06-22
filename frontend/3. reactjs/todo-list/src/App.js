import { useState, useEffect } from "react";

import "./App.css";
import { get, update, remove } from "./services/todo.service";

import Loading from "./components/Loading";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await get();
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  };

  const onCheck = async (todo, checked) => {
    setIsLoading(true);

    try {
      await update(todo.id, { ...todo, isDone: checked });
      await getData();
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  };

  const onRemove = async (id) => {
    const isOK = window.confirm("Are you sure you want to delete this item?");
    if (!isOK) return;

    setIsLoading(true);

    try {
      await remove(id);
      await getData();
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Loading isLoading={isLoading} />
      <h3>TODO LIST</h3>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onCheck={onCheck}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
