import { useEffect, useRef } from 'react';
import './todoItem.css';

/**
 * Renders a single todo item in the list.
 * Displays the todo's title, a button to toggle its completion state, 
 * and a button to delete it from the todo list. 
 * The appearance of the todo item changes dynamically based on its state 
 * (completed or not) and the current skin mode (dark or light).
 * 
 * @param {Object} props - Component props.
 * @param {Object} props.todo - Todo object containing the item's details.
 * @param {string} props.todo.id - Unique identifier for the todo item.
 * @param {string} props.todo.title - Title or description of the todo item.
 * @param {boolean} props.todo.completed - Indicates if the todo is completed.
 * @param {function} props.removeTodo - Function to delete a specific todo from the list.
 * @param {function} props.updateTodo - Function to toggle the todo's completion state.
 * @param {string} props.mode - Current skin mode ('dark' or 'light'). Defaults to 'dark'.
 * @returns {JSX.Element} The TodoItem component.
 */
const TodoItem = ({ todo, removeTodo, updateTodo, mode }) => {
    const { id, title, completed } = todo;
    const refTodo = useRef(null);
    const refStateButton = useRef(null);
    const refTodoTitle = useRef(null);

    useEffect(() => {
        // Updates the styles and classes of the todo item based on its state and the current mode.
        if (refTodo.current && refStateButton.current && refTodoTitle.current) {
            refTodo.current.className = `todo task-${mode}`;
            if (completed) {
                refStateButton.current.className = 'finished-bt';
                refTodoTitle.current.className = `title completedTask-${mode}`;
            } else {
                refStateButton.current.className = `unFinished-bt-${mode}`;
                refTodoTitle.current.className = `title unCompletedTask-${mode}`;
            }
        }
    }, [mode, completed]);

    return (
        <div id={id} ref={refTodo} style={{ backgroundColor: mode === 'dark' ? '#25273D' : 'white' }} draggable="true">
            <button ref={refStateButton} aria-label='Update todo' onClick={() => updateTodo(id)}></button>
            <p ref={refTodoTitle}>{title}</p>
            <button aria-label='Delete todo' className='delete-bt' onClick={() => removeTodo(id)}></button>
        </div>
    )
}

export default TodoItem;