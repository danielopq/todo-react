import { useEffect, useRef } from 'react';
import './todoItem.css';

const TodoItem = ({ todo, removeTodo, updateTodo, mode }) => {
    const { id, title, completed } = todo;
    const refTodo = useRef(null);
    const refStateButton = useRef(null);
    const refTodoTitle = useRef(null);

    useEffect(()=>{
        if(refTodo.current && refStateButton.current && refTodoTitle.current){
            refTodo.current.className =`todo task-${mode}`;
            if(completed){
                refStateButton.current.className = 'finished-bt';
                refTodoTitle.current.className = `completedTask-${mode}`;
            }else{
                refStateButton.current.className = `unFinished-bt-${mode}`;
                refTodoTitle.current.className = `unCompletedTask-${mode}`;
            }
        }
    },[mode,completed])

    return (
        <div id={id} ref={refTodo} style={{ backgroundColor: mode === 'dark' ? '#25273D' : 'white' }}>
            <button ref={refStateButton} aria-label='Update todo' onClick={() => updateTodo(id)}></button>
            <p ref={refTodoTitle}>{title}</p>
            <button aria-label='Delete todo' className='delete-bt' onClick={() => removeTodo(id)}></button>
        </div>
    )
}

export default TodoItem;