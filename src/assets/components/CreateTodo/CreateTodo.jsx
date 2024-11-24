import { useEffect, useState } from "react";
import './createTodo.css';

/**
 * Component for creating a new todo.
 * Renders an input form where users can type and submit a new todo item.
 * 
 * @param {Object} props - The component's props.
 * @param {Function} props.createTodo - Function to add a new todo to the list.
 * @param {string} props.mode - Current theme mode ('dark' or 'light').
 * @returns {JSX.Element} The CreateTodo component.
 */
const CreateTodo = ({ createTodo, mode }) => {
    const [title, setTitle] = useState(""); // State for the todo title being typed.

    /**
     * Handles the form submission for creating a new todo.
     * Validates that the todo title is not empty or blank (ignoring leading/trailing spaces).
     * If valid, it creates the todo and resets the input field.
     * 
     * @param {Event} e - The submit event triggered by the form.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            setTitle("");
        }
        createTodo(title);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div 
                id="createTodo" 
                style={{
                    backgroundColor: mode === 'dark' ? '#25273D' : 'white' // Adjusts background based on theme mode.
                }}
            >
                <div></div>
                <input 
                    type="text" 
                    placeholder="Create a new todo..." 
                    value={title} 
                    maxLength={30}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
        </form>
    );
};

export default CreateTodo;
