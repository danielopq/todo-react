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
          <div id="newTodo" className="todo">
            <button className='state-bt finishedTodo'></button>
            <input id="createTodo" type="text" placeholder='Create a new todo...'></input>
          </div>
        </form>
      </header>
      <main>
        <section id="todoList">
          
        </section>
      </main>
    </>
  )
}

export default App;
