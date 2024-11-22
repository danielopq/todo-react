import './App.css'
import { useEffect, useState } from 'react';
import SkinSwitch from './assets/components/SkinSwitch/SkinSwitch';
import CreateTodo from './assets/components/CreateTodo/CreateTodo';
import TodoList from './assets/components/TodoList/TodoList';
import {MainMenuBar,MobileFilterMenuBar} from './assets/components/MenuBar/MenuBar';
import Footer from './assets/components/Footer/Footer';

// const initialStateTodos = [
//   { id: 1, title: "Complete online JavaScript course", completed: true },
//   { id: 2, title: "Jog around the park 3x", completed: false },
//   { id: 3, title: "10 minutes meditation", completed: false },
//   { id: 4, title: "Read for 1 hour", completed: false },
//   { id: 5, title: "Pick up groceries", completed: false },
//   { id: 6, title: "Complete Todo App on Frontend Mentor", completed: false }
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

function App() {
  const [mode,setMode] = useState('light')
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
      setMode('dark');
      e.target.className = "sunBg";
      let darkMode = document.querySelectorAll('[class*=light]');
      darkMode.forEach(elem => elem.className = elem.className.replace(/light/g, "dark"));
      document.getElementsByTagName("main")[0].style.backgroundColor = "#171823";
    } else {
      setMode('light');
      e.target.className = "moonBg";
      let lightMode = document.querySelectorAll('[class*=dark]');
      lightMode.forEach(elem => elem.className = elem.className.replace(/dark/g, "light"));
      document.getElementsByTagName("main")[0].style.backgroundColor = "white";
    }
  }

  return (
    <>
      <header id="topSite" className='head-light-mode'>
        <SkinSwitch mode={mode} switchSkin={switchSkin} />
        <CreateTodo mode={mode} createTodo={createTodo} />
      </header>
      <main>
        <section id="main-cont">
          <div id="todoViewer" className='view-light-mode'>
            <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo} mode={mode} />
            <MainMenuBar mode={mode} uncompletedTodos={uncompletedTodos} clearCompleted={clearCompleted} />
          </div>
          <MobileFilterMenuBar mode={mode} setFilter={setFilter} /> 
        </section>  
      </main>
      <Footer/>
    </>
  )
}

export default App;
