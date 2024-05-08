const TodoItem = ({todo,removeTodo,updateTodo}) => {
    const{id,title,completed} = todo;
    return (
        <article id={id} className="container bg-light-mode task-light-mode">
            <button className={completed ? 'state-bt finished-bt bg-light-mode' : 'state-bt unFinished-bt bg-light-mode'} onClick={()=>updateTodo(id)}></button>
            <p className={completed ? 'todoText completed' : 'todoText unCompleted'}>{title}</p>
            <button className='delete-bt' onClick={()=>removeTodo(id)}></button>
        </article>
    )
}

export default TodoItem;