import { useState } from "react";

const TodoCreate = ({createTodo}) => {

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
            <div id="newTodo" className="container cont-light-mode single-cont">
                <button className='state-bt unFinished-bt'></button>
                <input id="createTodo" className="input-light-mode" type="text" placeholder='Create a new todo...' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
        </form>
    )
}

export default TodoCreate;