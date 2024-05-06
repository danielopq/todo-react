import './App.css'
import TodoCreate from './assets/components/TodoCreate';
import TodoList from './assets/components/TodoList';
import Filter from './assets/components/Filter';

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
          <Filter/>
          <p className='bottom-text'>Drag and drop to reorder list</p>
        </div>
      </main>
    </>
  )
}

export default App;
