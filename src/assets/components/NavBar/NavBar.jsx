import { useEffect, useRef } from 'react'
import './navBar.css'

const MainNavBar = ({ mode, uncompletedTodos, clearCompleted, setFilter }) => {
  return (
    <nav id="mainNavBar" className='navBar' style={{ backgroundColor: mode === 'dark' ? '#25273D' : 'white' }}>
      <p id="info">{uncompletedTodos} items left</p>
      <div id="desktopFilterNavBar"><FilterMenu setFilter={setFilter} mode={mode} /></div>
      <button id="clear-bt"  aria-label='Clear Completed' className={mode === "light" ? 'bt-light-mode' : 'bt-dark-mode'} onClick={clearCompleted}>Clear Completed</button>
    </nav>
  )
}

const MobileFilterNavBar = ({ setFilter, mode }) => {
  const darkModeStyle = {
    backgroundColor: '#25273D',
    boxShadow: 'none',
  }

  const lightModeStyle = {
    backgroundColor: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  }

  return (
    <nav id="mobileFilterNavBar" className='navBar' style={mode === 'dark' ? darkModeStyle : lightModeStyle}>
      <FilterMenu setFilter={setFilter} mode={mode} />
    </nav>
  )
}

const FilterMenu = ({ setFilter, mode }) => {
  const refFilterMenu = useRef(null);

  useEffect(() => {
    refFilterMenu.current.querySelectorAll("button").forEach((bt) => {
      if (bt.className !== "filter-active") {
        bt.className = mode === "light" ? "bt-light-mode" : "bt-dark-mode";
      }
    });
  }, [mode])

  const handleClick = (filter, e) => {
    setFilter(filter);
    if (refFilterMenu.current) {
      refFilterMenu.current.querySelectorAll("button").forEach((bt) => bt.className = mode === "light" ? 'bt-light-mode' : 'bt-dark-mode');
    }
    e.target.className = 'filter-active';
  }

  return (
    <div ref={refFilterMenu} className='filterMenu'>
      <button className='filter-active' aria-label='all' onClick={(e) => handleClick("all", e)}>All</button>
      <button className='bt-light-mode' aria-label='active' onClick={(e) => handleClick("active", e)}>Active</button>
      <button className='bt-light-mode' aria-label='completed' onClick={(e) => handleClick("completed", e)}>Completed</button>
    </div>
  )

}

export { MainNavBar, MobileFilterNavBar };