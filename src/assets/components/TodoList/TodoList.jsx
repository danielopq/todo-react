import { useRef, useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

/**
 * Renders the TodoList component, which displays the list of todo items and allows 
 * the user to reorder them using drag-and-drop functionality. 
 * 
 * @param {Object} props - Component props.
 * @param {Array<Object>} props.todos - Array of todo objects to be displayed.
 * @param {function} props.setTodos - Function to update the list of todos.
 * @param {function} props.removeTodo - Function to remove a specific todo item.
 * @param {function} props.updateTodo - Function to toggle the completion state of a todo item.
 * @param {string} props.mode - Current skin mode ('dark' or 'light').
 * @returns {JSX.Element} The TodoList component.
 */
const TodoList = ({ todos, setTodos, removeTodo, updateTodo, mode }) => {
  const todoListRef = useRef(null); // Reference to the todo list container.
  const [draggingElement, setDraggingElement] = useState(null); // Tracks the currently dragged element.

  useEffect(() => {
    const todoList = todoListRef.current;

    /**
     * Handles the start of a drag event. Adds a 'dragging' class to the dragged element.
     * @param {DragEvent} e - The dragstart event.
     */
    const handleDragStart = (e) => {
      if (e.target.classList.contains("todo")) {
        setDraggingElement(e.target);
        e.target.classList.add("dragging");
      }
    };

    /**
     * Handles the end of a drag event. Removes the 'dragging' class from the dragged element.
     * @param {DragEvent} e - The dragend event.
     */
    const handleDragEnd = (e) => {
      if (draggingElement) {
        draggingElement.classList.remove("dragging");
        setDraggingElement(null);
      }
    };

    /**
     * Handles the dragover event to enable real-time reordering.
     * Determines the position where the dragged element should be inserted.
     * @param {DragEvent} e - The dragover event.
     */
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

    /**
     * Finds the element in the container that is closest to the current drag position.
     * @param {HTMLElement} container - The container element.
     * @param {number} y - The vertical position of the drag event.
     * @returns {HTMLElement | null} The closest element to the drag position.
     */
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

    // Event listeners for drag-and-drop functionality.
    todoList.addEventListener("dragstart", handleDragStart);
    todoList.addEventListener("dragend", handleDragEnd);
    todoList.addEventListener("dragover", handleDragOver);

    // Cleanup event listeners when the component is unmounted or dependencies change.
    return () => {
      todoList.removeEventListener("dragstart", handleDragStart);
      todoList.removeEventListener("dragend", handleDragEnd);
      todoList.removeEventListener("dragover", handleDragOver);
    };
  }, [draggingElement]);

  /**
   * Reorders the todos based on the current DOM order after a drag-and-drop operation.
   */
  const reorderTodos = () => {
    const reorderedIds = Array.from(todoListRef.current.children).map(
      (child) => Number(child.id)
    );
    const reorderedTodos = reorderedIds.map((id) =>
      todos.find((todo) => todo.id === id)
    );
    setTodos(reorderedTodos);
  };

  return (
    <div id="todoList" ref={todoListRef} onDragEnd={reorderTodos}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} mode={mode}/>
      ))}
    </div>
  );
};

export default TodoList;