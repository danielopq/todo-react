import './App.css'
import TodoCreate from './assets/components/TodoCreate';
import TodoList from './assets/components/TodoList';

function App() {
  return (
    <>
      <header>
        <div id="title">
          <h1>TODO</h1>
          <button id="changeBg-bt"></button>
        </div>
        <TodoCreate/>
      </header>
      <main>
        <div id="main-container">
          <TodoList/>
          <menu className='whiteContainer single-cont'>
            <button className='bt-select'>All</button>
            <button className='bt-select'>Active</button>
            <button className='bt-select'>Completed</button>
          </menu>
          <p className='bottom-text'>Drag and drop to reorder list</p>
        </div>
      </main>
    </>
  )
}

export default App;
