import React from "react";
import TodoItem from "./TodoItem";

function Todos({ todos , funDelete, bool}) {

    function handleDelete(id) {
        funDelete(id);
    }

  return (
    <div className="p-1 m-4 rounded mb-2 bg-dark-subtle todo-container text-dark-emphasis">
        
    {
      bool ? (
        <>
          <h1 className="text-center">TODOs</h1>
          {todos.map((todo) => {
            return (
              <TodoItem key={todo.id} todo={todo} deletefun={handleDelete} />
            );
          })}
        </>
      ) : (
        <h2>No Todos to show</h2>
      )
    }
    </div>
  );
}

export default Todos;
