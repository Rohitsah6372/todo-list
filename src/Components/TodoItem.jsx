import React from "react";

function TodoItem({ todo, deletefun }) {
  function funDelete() {
    // console.log("Delete", todo.id);
    deletefun(todo.id);
  }

  return (
    <div className="border border-warning rounded-pill todo-item bg-light  p-1 m-2 br-2">
      <div className="p-2   todoItemList">
        <span className="p-2 fw-bold">{todo.id}</span>
        <span className="fw-bold">{todo.title}</span>
        <button className="btn btn-danger btn-sm p-1 m-2" onClick={funDelete}>
          Delete
        </button>
        <div>
          <span className="fw-bold p-4">DESC : {todo.desc}</span>
        </div>

      </div>
    </div>
  );
}

export default TodoItem;
