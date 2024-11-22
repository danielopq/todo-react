import './menuBar.css'

const MainMenuBar = ({ mode, uncompletedTodos, clearCompleted }) => {
  return (
    <div id="mainMenuBar" className='menuBar' style={{ backgroundColor: mode === 'dark' ? '#25273D' : 'white' }}>
      <p id="info" name="info">{uncompletedTodos} items left</p>
      <button id="clear-bt" className={mode === "light" ? 'bt-light-mode' : 'bt-dark-mode'} onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}

const MobileFilterMenuBar = ({ setFilter, mode }) => {
  return (
    <menu id="mobileFilterMenuBar" className='menuBar' style={{ backgroundColor: mode === 'dark' ? '#25273D' : 'white' }}>
      <FilterMenu setFilter={setFilter} mode={mode}/>
    </menu>
  )
}

const FilterMenu = ({ setFilter, mode }) => {
  const handleClick = (filter, e) => {
    setFilter(filter);
    document.getElementById('mobileFilterMenuBar').childNodes.forEach((bt) => bt.className = mode === "light" ? 'bt-light-mode' : 'bt-dark-mode');
    e.target.className = 'filter-active';
  }

  return (
    <>
      <button className='filter-active' onClick={(e) => handleClick("all", e)}>All</button>
      <button className='bt-light-mode' onClick={(e) => handleClick("active", e)}>Active</button>
      <button className='bt-light-mode' onClick={(e) => handleClick("completed", e)}>Completed</button>
    </>
  )

}

export { MainMenuBar, MobileFilterMenuBar };