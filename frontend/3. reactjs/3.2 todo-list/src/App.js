import { useState, useEffect } from "react";

import "./App.css";
import { create, get, update, remove } from "./services/todo.service";

import Loading from "./components/Loading";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await get();
      setTodos(
        res.data.sort((todo1, todo2) => todo2.createdAt - todo1.createdAt)
      );
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  };

  const addTodo = async () => {
    if (!title || !title.trim() || !description || !description.trim()) {
      alert("Please fill in title and description");
      return;
    }

    setIsLoading(true);

    try {
      await create({
        title,
        description,
        isDone: false,
        createdAt: Date.now(),
      });
      setTitle("");
      setDescription("");
      await getData();
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
      <div className="todo-create">
        <input
          className="todo-input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="todo-input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="create-todo-btn" onClick={addTodo}>
          Create todo
        </button>
      </div>
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
