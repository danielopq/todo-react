const TodoItem = () => {
    return (
        <article id="tarea01" className="whiteContainer task">
            <button className='state-bt finished-bt'></button>
            <p className='todoText completed'>Complete online JavaScript course</p>
            <button className='delete-bt'></button>
        </article>
    )
}

export default TodoItem;