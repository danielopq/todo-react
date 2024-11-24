import { useRef, useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, setTodos, removeTodo, updateTodo, mode }) => {
  const todoListRef = useRef(null);
  const [draggingElement, setDraggingElement] = useState(null);

  useEffect(() => {
    const todoList = todoListRef.current;

    const handleDragStart = (e) => {
      if (e.target.classList.contains("todo")) {
        setDraggingElement(e.target);
        e.target.classList.add("dragging");
      }
    };

    const handleDragEnd = (e) => {
      if (draggingElement) {
        draggingElement.classList.remove("dragging");
        setDraggingElement(null);
      }
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(todoList, e.clientY);
      if (draggingElement) {
        if (afterElement == null) {
          todoList.appendChild(draggingElement);
        } else {
          todoList.insertBefore(draggingElement, afterElement);
        }
      }
    };

    const getDragAfterElement = (container, y) => {
      const draggableElements = [
        ...container.querySelectorAll(".todo:not(.dragging)"),
      ];
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    };

    todoList.addEventListener("dragstart", handleDragStart);
    todoList.addEventListener("dragend", handleDragEnd);
    todoList.addEventListener("dragover", handleDragOver);

    return () => {
      todoList.removeEventListener("dragstart", handleDragStart);
      todoList.removeEventListener("dragend", handleDragEnd);
      todoList.removeEventListener("dragover", handleDragOver);
    };
  }, [draggingElement]);

  const reorderTodos = () => {
    const reorderedIds = Array.from(todoListRef.current.children).map(
      (child) => Number(child.id) // Asegúrate de que el id sea un número
    );
    const reorderedTodos = reorderedIds.map((id) =>
      todos.find((todo) => todo.id === id)
    );
    setTodos(reorderedTodos);
  };

  return (
    <div id="todoList" ref={todoListRef} onDragEnd={reorderTodos}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          mode={mode}
        />
      ))}
    </div>
  );
};

export default TodoList;