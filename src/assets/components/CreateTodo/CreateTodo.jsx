import { useEffect, useState } from "react";
import './createTodo.css';

const CreateTodo = ({createTodo,mode}) => {

    const [title,setTitle] = useState("");

    /**
     * Handles the form submission for creating a new todo.
     * Validates that the todo title is not empty or blank (ignores leading/trailing spaces).
     * If valid, it creates the todo and resets the title input.
     * 
     * @param {Event} e - The submit event triggered by the form.
     */
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!title.trim()){
            return(setTitle(""));
        }
        createTodo(title);
        setTitle("");
    }

    return (
        //className={mode === 'dark' ? 'createTodoDark' : 'createTodoLight'}
        <form onSubmit={handleSubmit}>
            <div id="createTodo" style={{backgroundColor: mode === 'dark' ? '#25273D' : 'white'}}> 
                <div></div>
                <input type="text" placeholder='Create a new todo...' value={title} maxLength={30} onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
        </form>
    )
}

export default CreateTodo;