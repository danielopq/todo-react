const TodoItem = ({todo}) => {
    const{id,title,completed} = todo;
    return (
        <article id={id} className="whiteContainer task">
            <button className={completed ? 'state-bt unFinished-bt' : 'state-bt finished-bt'}></button>
            <p className={completed ? 'todoText unCompleted' : 'todoText completed'}>{title}</p>
            <button className='delete-bt'></button>
        </article>
    )
}

export default TodoItem;