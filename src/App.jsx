import './App.css'
import { useEffect, useState } from 'react';
import SkinSwitch from './assets/components/SkinSwitch/SkinSwitch';
import TodoCreate from './assets/components/TodoCreate/TodoCreate';
import TodoList from './assets/components/TodoList/TodoList';
import TodoFilter from './assets/components/TodoFilter/TodoFilter';
import TodoCompleted from './assets/components/TodoCompleted/TodoCompleted';


// const initialStateTodos = [
//   { id: 1, title: "Complete online JavaScript course", completed: true },
//   { id: 2, title: "Jog around the park 3x", completed: false },
//   { id: 3, title: "10 minutes meditation", completed: false },
//   { id: 4, title: "Read for 1 hour", completed: false },
//   { id: 5, title: "Pick up groceries", completed: false },
//   { id: 6, title: "Complete Todo App on Frontend Mentor", completed: false }
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

let mode = "light";
function App() {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: new Date(), title: title.trim(), completed: false
    }
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const uncompletedTodos = todos.filter((todo) => !todo.completed).length

  const [filter, setFilter] = useState("all");

  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

  const switchSkin = (e) => {
    if (e.target.className === "moonBg") {
      mode = "dark";
      let darkMode = document.querySelectorAll('[class*=light]');
      darkMode.forEach(elem => elem.className = elem.className.replace(/light/g, "dark"));
      document.getElementsByTagName("main")[0].style.backgroundColor = "#171823";
    } else {
      mode = "light";
      let lightMode = document.querySelectorAll('[class*=dark]');
      lightMode.forEach(elem => elem.className = elem.className.replace(/dark/g, "light"));
      document.getElementsByTagName("main")[0].style.backgroundColor = "white";
    }
  }

  return (
    <>
      <header id="topSite" className='head-light-mode'>
        <SkinSwitch mode={mode} switchSkin={switchSkin} />
        <TodoCreate createTodo={createTodo} />
      </header>
      <main>
        <section id="main-cont">
          <div id="todoViewer" className='view-light-mode'>
            <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo} mode={mode} />
            <TodoCompleted uncompletedTodos={uncompletedTodos} clearCompleted={clearCompleted} />
          </div>
          <TodoFilter setFilter={setFilter} mode={mode} />
          <p className='bottom-text'>Drag and drop to reorder list</p>
        </section>
      </main>
    </>
  )
}

export default App;
