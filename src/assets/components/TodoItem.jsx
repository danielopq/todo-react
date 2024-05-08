const TodoItem = ({todo,removeTodo,updateTodo,mode}) => {
    const{id,title,completed} = todo;

    const articleClass = ()=>{
        let artClass = "container bg-light-mode task-light-mode";
        if(mode === "dark"){artClass = artClass.replace(/light/g,"dark");}
        return artClass;
    }

    const buttonClass = ()=>{
        let btClass = "";
        completed ? btClass = 'state-bt finished-bt bg-light-mode' : btClass = 'state-bt unFinished-bt bg-light-mode';
        mode === "dark" && (btClass = btClass.replace(/light/g,"dark"));
        return btClass;
    }

    const paragClass = ()=>{
        let pClass = "";
        completed ? pClass = 'todoText completed-light-mode' : pClass = 'todoText unCompleted-light-mode'
        mode === "dark" && (pClass = pClass.replace(/light/g,"dark"));
        return pClass;
    }

    return (
        <article id={id} className={articleClass()}>
            <button className={buttonClass()} onClick={()=>updateTodo(id)}></button>
            <p className={paragClass()}>{title}</p>
            <button className='delete-bt' onClick={()=>removeTodo(id)}></button>
        </article>
    )
}

export default TodoItem;