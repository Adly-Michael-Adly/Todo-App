import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { BiCheckCircle } from "react-icons/bi";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdite] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdite({ id: null, value: "" });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <BiCheckCircle
          title="Complete"
          onClick={() => completeTodo(todo.id)}
          className="chack-icon"
        />

        <TiEdit
          title="Edit"
          onClick={() => setEdite({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />

        <RiCloseCircleLine
          title="Delete"
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
