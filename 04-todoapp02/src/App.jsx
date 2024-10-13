import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "2024-02-20",
    },
    {
      name: "Go to clg",
      dueDate: "2024-02-20",
    },
    {
      name: "do hard work",
      dueDate: "everyday",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
