const TodoItem = ({todo}) => {
    const{id,title,completed} = todo;
    return (
        <article id={id} className="whiteContainer task">
            <button className={completed ? 'state-bt finished-bt' : 'state-bt unFinished-bt'}></button>
            <p className={completed ? 'todoText completed' : 'todoText unCompleted'}>{title}</p>
            <button className='delete-bt'></button>
        </article>
    )
}

export default TodoItem;