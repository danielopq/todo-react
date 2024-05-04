import './App.css'

function App() {
  return (
    <>
      <header>
        <div id="title">
          <h1>TODO</h1>
          <button id="changeBg-bt"></button>
        </div>
        <form>
          <div id="newTodo" className="todo single-todo">
            <button className='state-bt unFinished-bt'></button>
            <input id="createTodo" type="text" placeholder='Create a new todo...'></input>
          </div>
        </form>
      </header>
      <main>
        <div id="main-container">
          <section id="todoList">
            <article id="tarea01" className="todo top-todo">
              <button className='state-bt finished-bt'></button>
              <p className='todoText completed'>Complete online JavaScript course</p>
              <button className='delete-bt'></button>
            </article>
            <article id="tarea02" className="todo mid-todo">
              <button className='state-bt unFinished-bt'></button>
              <p className='todoText unCompleted'>Jog around the park 3x</p>
              <button className='delete-bt'></button>
            </article>
            <div id="info-bar" className='todo bottom-todo'>
              <p id="info" name="info">5 items left</p>
              <button className="clear-bt">Clear Completed</button>
            </div>
          </section>
          <menu className='todo single-todo'></menu>
        </div>


      </main>

    </>
  )
}

export default App;
