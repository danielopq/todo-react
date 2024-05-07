const TodoFilter = ({setFilter}) =>{

  const handleClick =(filter,e)=>{
    setFilter(filter)
    document.getElementById('filterMenu').childNodes.forEach((bt) => bt.className = 'bt-filter filter-inactive');
    e.target.className = 'bt-filter filter-active';
  }

    return(
      <menu id="filterMenu" className='container single-cont'>
        <button className='bt-filter filter-active' onClick={(e)=>handleClick("all",e)}>All</button>
        <button className='bt-filter filter-inactive' onClick={(e)=>handleClick("active",e)}>Active</button>
        <button className='bt-filter filter-inactive' onClick={(e)=>handleClick("completed",e)}>Completed</button>
      </menu>
    )
}
export default TodoFilter;