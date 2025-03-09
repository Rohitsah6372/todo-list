import React, { useState } from "react";

function AddTodos({addTodo}) {
  const [bool, setBool] = useState(false);

  function submitTodo(e) {
    e.preventDefault()
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    // console.log(title, desc);
    if (title.length === 0 || desc.length === 0) {
      alert("Title or Description cannot be empty");
      return;
    }

    addTodo(title, desc);
    
  }

  return (
    <div className="container my-3 bg-light border border-2 border-primary p-3">
     {
        !bool ? (
            <div className="d-grid gap-2">
                <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => {
                    setBool(!bool);
                }}
                >
                    ADD YOUR TODOS HERE
                </button>
            </div>
        ) : ("")
     }

        {bool ? (
          <div>
            <form className="bg-light p-3" onSubmit={(e)=> submitTodo(e)}>
              <h1>Add a Todo</h1>
              <div className="mb-3">
                <label className="form-label">Todo Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter Todo Title"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  placeholder="Enter Description"
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success btn-lg"  >
                  ADD YOUR TODOS HERE
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>

);
}

export default AddTodos;
