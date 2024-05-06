import './App.css'
import Header from './assets/components/Header';

function App() {
  return (
    <>
    <Header/>
      <main>
        <div id="main-container">
          <section id="todoList">
            <article id="tarea01" className="whiteContainer task">
              <button className='state-bt finished-bt'></button>
              <p className='todoText completed'>Complete online JavaScript course</p>
              <button className='delete-bt'></button>
            </article>
            <article id="tarea02" className="whiteContainer task">
              <button className='state-bt unFinished-bt'></button>
              <p className='todoText unCompleted'>10 minutes meditation</p>
              <button className='delete-bt'></button>
            </article>
            <article id="tarea03" className="whiteContainer task">
              <button className='state-bt unFinished-bt'></button>
              <p className='todoText unCompleted'>Read for 1 hour</p>
              <button className='delete-bt'></button>
            </article>
            <article id="tarea04" className="whiteContainer task">
              <button className='state-bt unFinished-bt'></button>
              <p className='todoText unCompleted'>Pick up groceries</p>
              <button className='delete-bt'></button>
            </article>
            <article id="tarea05" className="whiteContainer task">
              <button className='state-bt unFinished-bt'></button>
              <p className='todoText unCompleted'>Complete Todo App on Frontend Mentor</p>
              <button className='delete-bt'></button>
            </article>
            <div id="info-bar" className='whiteContainer'>
              <p id="info" name="info">5 items left</p>
              <button className="clear-bt">Clear Completed</button>
            </div>
          </section>
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
