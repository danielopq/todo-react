const TodoFilter = ({setFilter},{mode}) =>{

  const handleClick =(filter,e)=>{
    setFilter(filter);
    document.getElementById('filterMenu').childNodes.forEach((bt) => bt.className = mode === "light" ? 'bt-filter bt-light-mode' : 'bt-filter bt-dark-mode');
    e.target.className = 'bt-filter filter-active';
  }

    return(
      <menu id="filterMenu" className='container bg-light-mode men-light-mode'>
        <button className='bt-filter filter-active' onClick={(e)=>handleClick("all",e)}>All</button>
        <button className='bt-filter bt-light-mode' onClick={(e)=>handleClick("active",e)}>Active</button>
        <button className='bt-filter bt-light-mode' onClick={(e)=>handleClick("completed",e)}>Completed</button>
      </menu>
    )
}
export default TodoFilter;