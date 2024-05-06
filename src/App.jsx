import './App.css'
import { useState } from 'react';
import ChangeSkin from './assets/components/ChangeSkin';
import TodoCreate from './assets/components/TodoCreate';
import TodoList from './assets/components/TodoList';
import TodoFilter from './assets/components/TodoFilter';
import TodoCompleted from './assets/components/TodoCompleted';


const initialStateTodos = [
  {id:1,title: "Complete online JavaScript course",completed: true},
  {id:2,title: "Jog around the park 3x",completed: true},
  {id:3,title: "10 minutes meditation",completed: true},
  {id:4,title: "Read for 1 hour",completed: true},
  {id:5,title: "Pick up groceries",completed: true},
  {id:6,title: "Complete Todo App on Frontend Mentor",completed: true}
];

function App() {
  const [todos,setTodos] = useState(initialStateTodos);

  return (
    <>
      <header>
        <ChangeSkin/>
        <TodoCreate/>
      </header>
      <main>
      <section id="main-container">
          <div id="todoViewer">
          <TodoList/>
          <TodoCompleted/>
          </div>
          <TodoFilter/>
          <p className='bottom-text'>Drag and drop to reorder list</p>
        </section>
      </main>
    </>
  )
}

export default App;
