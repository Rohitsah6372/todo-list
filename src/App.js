import { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";
import AddTodos from "./Components/AddTodos";


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Complete React Project",
      desc: "Finish implementing the Navbar and search functionality."
    },
    {
      id: 2,
      title: "Update Resume",
      desc: "Add recent projects and update skills section."
    },
    {
      id: 3,
      title: "Buy Groceries",
      desc: "Get milk, eggs, and vegetables from the store."
    },
    {
      id: 4,
      title: "Practice DSA",
      desc: "Solve at least 5 problems on Leetcode."
    },
    {
      id: 5,
      title: "Read a Book",
      desc: "Read at least 20 pages of 'Clean Code'."
    }
  ]);

  function handleDelete(id){
    const newTodos = todos.filter((todo)=>{
      return todo.id !==id
    })

    setTodos(newTodos)
  }

  const addingTodo = (title, desc) => {
    let len = todos.length;
    let id = len ===0 ? 1 : (len+1)
    const newTodo={
      id : id,
      title : title,
      desc : desc
    }

    setTodos([...todos, newTodo])
    console.log(newTodo)
  }


  return (
    <div>
      <Navbar/>
      <AddTodos  addTodo={addingTodo}/>
      {
        todos.length !== 0 ?
        <Todos todos={todos} bool={true} funDelete={handleDelete} /> :
        <Todos todos={todos} bool={false} funDelete={handleDelete} />
      }
      <Footer/>
    </div>
  );
}

export default App;
