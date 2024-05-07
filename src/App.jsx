import './App.css'
import { useState } from 'react';
import ChangeSkin from './assets/components/ChangeSkin';
import TodoCreate from './assets/components/TodoCreate';
import TodoList from './assets/components/TodoList';
import TodoFilter from './assets/components/TodoFilter';
import TodoCompleted from './assets/components/TodoCompleted';


const initialStateTodos = [
  { id: 1, title: "Complete online JavaScript course", completed: true},
  { id: 2, title: "Jog around the park 3x", completed: false},
  { id: 3, title: "10 minutes meditation", completed: false},
  { id: 4, title: "Read for 1 hour", completed: false},
  { id: 5, title: "Pick up groceries", completed: false},
  { id: 6, title: "Complete Todo App on Frontend Mentor", completed: false}
];

function App() {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: new Date(), title: title.trim(), completed: false
    }
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id)=>{
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <header>
        <ChangeSkin />
        <TodoCreate createTodo = {createTodo}/>
      </header>
      <main>
        <section id="main-container">
          <div id="todoViewer">
            <TodoList todos={todos} removeTodo ={removeTodo}/>
            <TodoCompleted />
          </div>
          <TodoFilter />
          <p className='bottom-text'>Drag and drop to reorder list</p>
        </section>
      </main>
    </>
  )
}

export default App;
