import TodoItem from "./TodoItem";

const TodoList = ({todos,removeTodo}) => {
    return (
        <div id="todoList">
            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo}/>
            ))}
        </div>
    )
}

export default TodoList;