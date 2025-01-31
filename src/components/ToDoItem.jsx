import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

function ToDoItem(props) {
  const [editMode, setEditMode] = useState(false);
  const [newTask, setNewTask] = useState(props.todo.task);

  const handleEdit = () => {
    if (editMode) {
      props.editTodo(props.todo.id, newTask);
    }
    setEditMode(!editMode);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.toggleComplete(props.todo.id)}
      />
      {editMode ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span>{props.todo.task}</span>
      )}
      <button onClick={() => props.deleteTodo(props.todo.id)}>
        <FaTrash />
      </button>
      <button onClick={handleEdit}>{editMode ? <FaSave/> : <FaEdit />}</button>
    </div>
  );
}

export default ToDoItem;
