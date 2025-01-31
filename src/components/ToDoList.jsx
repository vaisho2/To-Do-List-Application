import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <div className="todo-list">
      {props.todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={props.deleteTodo}
          toggleComplete={props.toggleComplete}
          editTodo={props.editTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;

