import './App.css'
import ChangeSkin from './assets/components/ChangeSkin';
import TodoCreate from './assets/components/TodoCreate';
import TodoList from './assets/components/TodoList';
import TodoFilter from './assets/components/TodoFilter';
import TodoCompleted from './assets/components/TodoCompleted';

function App() {
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
