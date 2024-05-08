import TodoItem from "./TodoItem";

const TodoList = ({todos,removeTodo,updateTodo,mode}) => {
    return (
        <div id="todoList">
            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} mode={mode}/>
            ))}
        </div>
    )
}

export default TodoList;