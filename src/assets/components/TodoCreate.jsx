const TodoCreate = () => {
    return (
        <form>
            <div id="newTodo" className="whiteContainer single-cont">
                <button className='state-bt unFinished-bt'></button>
                <input id="createTodo" type="text" placeholder='Create a new todo...'></input>
            </div>
        </form>
    )
}

export default TodoCreate;