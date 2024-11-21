const TodoCompleted = ({uncompletedTodos,clearCompleted}) => {
    return (
        <div id="info-bar" className='container bg-light-mode'>
            <p id="info" className="info-light-mode" name="info">{uncompletedTodos} items left</p>
            <button className="clear-bt bt-light-mode" onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoCompleted;