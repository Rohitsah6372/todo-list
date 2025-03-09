import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";
import AddTodos from "./Components/AddTodos";

function App() {
  let data = JSON.parse(localStorage.getItem("todos"));

  const [todos, setTodos] = useState(data);

  function handleDelete(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  const addingTodo = (title, desc) => {
    let len = todos.length;
    let id = len === 0 ? 1 : len + 1;
    const newTodo = {
      id: id,
      title: title,
      desc: desc,
    };

    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Navbar />
      <AddTodos addTodo={addingTodo} />
      {todos.length !== 0 ? (
        <Todos todos={todos} bool={true} funDelete={handleDelete} />
      ) : (
        <Todos todos={todos} bool={false} funDelete={handleDelete} />
      )}
      <Footer />
    </div>
  );
}

export default App;
