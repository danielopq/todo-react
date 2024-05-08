const TodoCompleted = ({uncompletedTodos,clearCompleted}) => {
    return (
        <div id="info-bar" className='container bg-light-mode'>
            <p id="info" name="info">{uncompletedTodos} items left</p>
            <button className="clear-bt" onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoCompleted;