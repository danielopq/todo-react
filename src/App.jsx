import './App.css'
import TodoCreate from './assets/components/TodoCreate';
import TodoList from './assets/components/TodoList';
import Filter from './assets/components/Filter';
import ChangeSkin from './assets/components/ChangeSkin';

function App() {
  return (
    <>
      <header>
        <ChangeSkin/>
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
