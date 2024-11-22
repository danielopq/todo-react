import './todoItem.css';

const TodoItem = ({ todo, removeTodo, updateTodo, mode }) => {
    const { id, title, completed } = todo;

    /**
     * Get the CSS class for the todo container.
     * Dynamically updates the class based on the selected mode (light or dark).
     * @returns {string} - The CSS class for the todo container.
     */
    const todoClass = () => {
        let artClass = "todo task-light-mode";
        if (mode === "dark") { artClass = artClass.replace(/light/g, "dark"); }
        return artClass;
    }

    /**
     * Get the CSS class for the state button.
     * Dynamically updates the class based on the completion status and mode (light or dark).
     * @returns {string} - The CSS class for the state button.
     */
    const buttonStateClass = () => {
        let btClass = "";
        completed ? btClass = 'finished-bt' : btClass = 'unFinished-bt-light';
        mode === "dark" && (btClass = btClass.replace(/light/g, "dark"));
        return btClass;
    }

    /**
     * Get the CSS class for the todo title.
     * Dynamically updates the class based on the completion status and mode (light or dark).
     * @returns {string} - The CSS class for the todo title.
     */
    const titleStateClass = () => {
        let pClass = "";
        completed ? pClass = 'completedTask-light' : pClass = 'unCompletedTask-light'
        mode === "dark" && (pClass = pClass.replace(/light/g, "dark"));
        return pClass;
    }

    return (
        <div id={id} className={ mode === 'dark' ? 'todo task-dark' : 'todo task-light'} style={{ backgroundColor: mode === 'dark' ? '#25273D' : 'white' }}>
            <button className={buttonStateClass()} onClick={() => updateTodo(id)}></button>
            <p className={titleStateClass()}>{title}</p>
            <button className='delete-bt' onClick={() => removeTodo(id)}></button>
        </div>
    )
}

export default TodoItem;