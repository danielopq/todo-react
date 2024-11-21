import './todoItem.css';

const TodoItem = ({todo,removeTodo,updateTodo,mode}) => {
    const{id,title,completed} = todo;

    const articleClass = ()=>{
        let artClass = "todo bg-light-mode task-light-mode";
        if(mode === "dark"){artClass = artClass.replace(/light/g,"dark");}
        return artClass;
    }

    const buttonClass = ()=>{
        let btClass = "";
        completed ? btClass = 'state-bt finished-bt bg-light-mode' : btClass = 'state-bt unFinished-bt-light bg-light-mode';
        mode === "dark" && (btClass = btClass.replace(/light/g,"dark"));
        return btClass;
    }
    
    const paragClass = ()=>{
        let pClass = "";
        completed ? pClass = 'todoText completedTask-light' : pClass = 'todoText unCompletedTask-light'
        mode === "dark" && (pClass = pClass.replace(/light/g,"dark"));
        return pClass;
    }

    return (
        <div id={id} className={articleClass()}>
            <button className={buttonClass()} onClick={()=>updateTodo(id)}></button>
            <p className={paragClass()}>{title}</p>
            <button className='delete-bt' onClick={()=>removeTodo(id)}></button>
        </div>
    )
}

export default TodoItem;