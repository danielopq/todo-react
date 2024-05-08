import { useState } from "react";

const TodoCreate = ({createTodo,mode}) => {

    const [title,setTitle] = useState("");

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        
        if(!title.trim()){
            return(setTitle(""));
        }
        createTodo(title);
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div id="newTodo" className="container bg-light-mode">
                <button className='state-bt unFinished-bt bg-light-mode'></button>
                <input id="createTodo" className="bg-light-mode" type="text" placeholder='Create a new todo...' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
        </form>
    )
}

export default TodoCreate;