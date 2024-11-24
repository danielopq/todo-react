import { useEffect, useRef } from 'react';
import './navBar.css';

/**
 * Renders the main navigation bar for the application.
 * 
 * @param {Object} props - Component props.
 * @param {string} props.mode - Current website skin mode ('dark' or 'light').
 * @param {number} props.uncompletedTodos - Count of uncompleted todos.
 * @param {function} props.clearCompleted - Function to clear completed todos from the todo list.
 * @param {function} props.setFilter - Function to apply a filter to the todo list.
 * @returns {JSX.Element} The main navigation bar component.
 */
const MainNavBar = ({ mode, uncompletedTodos, clearCompleted, setFilter }) => {
  return (
    <nav id="mainNavBar" className="navBar" style={{ backgroundColor: mode === 'dark' ? '#25273D' : 'white' }}>
      <p id="info">{uncompletedTodos} items left</p>
      <div id="desktopFilterNavBar">
        <FilterMenu setFilter={setFilter} mode={mode} />
      </div>
      <button id="clear-bt" aria-label="Clear Completed" className={mode === "light" ? 'bt-light-mode' : 'bt-dark-mode'} onClick={clearCompleted}>Clear Completed</button>
    </nav>
  );
};

/**
 * Renders the mobile version of the navigation bar.
 * 
 * @param {Object} props - Component props.
 * @param {string} props.mode - Current website skin mode ('dark' or 'light').
 * @param {function} props.setFilter - Function to apply a filter to the todo list.
 * @returns {JSX.Element} The mobile navigation bar component.
 */
const MobileFilterNavBar = ({ setFilter, mode }) => {
  const darkModeStyle = {
    backgroundColor: '#25273D',
    boxShadow: 'none',
  };

  const lightModeStyle = {
    backgroundColor: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  };

  return (
    <nav 
      id="mobileFilterNavBar" 
      className="navBar" 
      style={mode === 'dark' ? darkModeStyle : lightModeStyle}
    >
      <FilterMenu setFilter={setFilter} mode={mode} />
    </nav>
  );
};

/**
 * Renders the filter menu for the todo list.
 * 
 * @param {Object} props - Component props.
 * @param {string} props.mode - Current website skin mode ('dark' or 'light').
 * @param {function} props.setFilter - Function to apply a filter to the todo list.
 * @returns {JSX.Element} The filter menu component.
 */
const FilterMenu = ({ setFilter, mode }) => {
  const refFilterMenu = useRef(null);

  useEffect(() => {
    // Updates button styles based on the current mode whenever it changes.
    if (refFilterMenu.current) {
      refFilterMenu.current.querySelectorAll("button").forEach((bt) => {
        if (bt.className !== "filter-active") {
          bt.className = mode === "light" ? "bt-light-mode" : "bt-dark-mode";
        }
      });
    }
  }, [mode]);

  /**
   * Handles filter selection.
   * Applies the chosen filter to the todo list and updates button styles.
   * 
   * @param {string} filter - Filter to apply ('all', 'active', or 'completed').
   * @param {Event} e - The click event triggered by a button.
   */
  const handleClick = (filter, e) => {
    setFilter(filter); // Set the chosen filter for the todo list.
    if (refFilterMenu.current) {
      // Reset all button styles except the selected one.
      refFilterMenu.current.querySelectorAll("button").forEach((bt) => 
        bt.className = mode === "light" ? 'bt-light-mode' : 'bt-dark-mode'
      );
    }
    e.target.className = 'filter-active'; // Highlight the selected filter.
  };

  return (
    <div ref={refFilterMenu} className="filterMenu">
      <button className="filter-active" aria-label="all" onClick={(e) => handleClick("all", e)}>All</button>
      <button className="bt-light-mode" aria-label="active" onClick={(e) => handleClick("active", e)}>Active</button>
      <button className="bt-light-mode" aria-label="completed" onClick={(e) => handleClick("completed", e)}>Completed</button>
    </div>
  );
};

export { MainNavBar, MobileFilterNavBar };
