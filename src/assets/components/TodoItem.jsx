const TodoItem = ({todo,removeTodo,updateTodo}) => {
    const{id,title,completed} = todo;
    return (
        <article id={id} className="container task">
            <button className={completed ? 'state-bt finished-bt' : 'state-bt unFinished-bt'} onClick={()=>updateTodo(id)}></button>
            <p className={completed ? 'todoText completed' : 'todoText unCompleted'}>{title}</p>
            <button className='delete-bt' onClick={()=>removeTodo(id)}></button>
        </article>
    )
}

export default TodoItem;