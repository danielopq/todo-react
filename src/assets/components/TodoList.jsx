import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
    return (
        <div id="todoList">
            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </div>
    )
}

export default TodoList;