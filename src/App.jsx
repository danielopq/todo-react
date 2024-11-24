import './App.css';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import SkinSwitch from './assets/components/SkinSwitch/SkinSwitch';
import CreateTodo from './assets/components/CreateTodo/CreateTodo';
import TodoList from './assets/components/TodoList/TodoList';
import { MainNavBar, MobileFilterNavBar } from './assets/components/NavBar/NavBar';
import Footer from './assets/components/Footer/Footer';

const defaultTodos = [
  { id: uuidv4(), title: "Complete online JavaScript course", completed: true },
  { id: uuidv4(), title: "Jog around the park 3x", completed: false },
  { id: uuidv4(), title: "10 minutes meditation", completed: false },
  { id: uuidv4(), title: "Read for 1 hour", completed: false },
  { id: uuidv4(), title: "Pick up groceries", completed: false },
  { id: uuidv4(), title: "Complete Todo App on Frontend Mentor", completed: false }
];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || defaultTodos;

function App() {

  const [mode, setMode] = useState('dark')
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

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
      document.getElementsByTagName("body")[0].style.backgroundColor = "#171823";
    } else {
      setMode('light');
      e.target.className = "moonBg";
      document.getElementsByTagName("body")[0].style.backgroundColor = "#FAFAFA";
    }
  }

  return (
    <>
      <header id="topSite" className={mode === 'dark' ? 'headerDarkMode' : 'headerLightMode'}>
        <SkinSwitch mode={mode} switchSkin={switchSkin} />
        <CreateTodo mode={mode} createTodo={createTodo} />
      </header>
      <main>
        <div id="main-cont">
          <div id="todoViewer" className={mode === 'dark' ? 'viewerDarkMode' : 'viewerLightMode'}>
            <TodoList todos={filterTodos()} setTodos={setTodos}  removeTodo={removeTodo} updateTodo={updateTodo} mode={mode} />
            <MainNavBar mode={mode} uncompletedTodos={uncompletedTodos} clearCompleted={clearCompleted} setFilter={setFilter} />
          </div>
          <MobileFilterNavBar mode={mode} setFilter={setFilter} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
