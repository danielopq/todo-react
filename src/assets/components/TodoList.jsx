import TodoItem from "./TodoItem";

const TodoList = ({todos,removeTodo,updateTodo}) => {
    return (
        <div id="todoList">
            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            ))}
        </div>
    )
}

export default TodoList;