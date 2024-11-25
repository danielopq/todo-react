import { useRef, useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

/**
 * Renders the TodoList component, which displays the list of todo items and allows 
 * the user to reorder them using drag-and-drop functionality, supporting both 
 * desktop (mouse drag) and mobile (touch drag) interactions.
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
     * Handles the start of a drag event on desktop. Adds a 'dragging' class to the dragged element.
     * @param {DragEvent} e - The dragstart event.
     */
    const handleDragStart = (e) => {
      const target = e.target.closest(".todo"); // Find the closest .todo item
      if (!target) return; // Exit if no valid target is found

      setDraggingElement(target);
      target.classList.add("dragging");
    };

    /**
     * Handles the end of a drag event on desktop. Removes the 'dragging' class from the dragged element.
     * @param {DragEvent} e - The dragend event.
     */
    const handleDragEnd = () => {
      if (draggingElement) {
        draggingElement.classList.remove("dragging");
        setDraggingElement(null);
        reorderTodos(); // Reorder the todos after the drag is complete
      }
    };

    /**
     * Handles the dragover event on desktop to enable real-time reordering.
     * @param {DragEvent} e - The dragover event.
     */
    const handleDragOver = (e) => {
      e.preventDefault(); // Prevent default behavior to allow dropping
      const afterElement = getDragAfterElement(todoList, e.clientY); // Find the element to drop after
      if (draggingElement) {
        if (afterElement == null) {
          todoList.appendChild(draggingElement); // Append at the end if no afterElement
        } else {
          todoList.insertBefore(draggingElement, afterElement); // Insert before the identified element
        }
      }
    };

    /**
     * Handles the start of a touch event on mobile. Adds a 'dragging' class to the dragged element.
     * @param {TouchEvent} e - The touchstart event.
     */
    const handleTouchStart = (e) => {
      const target = e.target.closest(".todo"); // Find the closest .todo item
      if (!target) return; // Exit if no valid target is found

      setDraggingElement(target);
      target.classList.add("dragging");

      const touch = e.touches[0]; // Get the first touch point
      target.dataset.startY = touch.clientY; // Store the initial touch Y position
    };

    /**
     * Handles the touchmove event on mobile. Moves the dragged element in real-time based on touch movement.
     * @param {TouchEvent} e - The touchmove event.
     */
    const handleTouchMove = (e) => {
      if (!draggingElement) return; // Exit if no element is being dragged

      const touch = e.touches[0]; // Get the current touch point
      const y = touch.clientY; // Get the current vertical position of the touch

      // Identify the element after the current touch position
      const afterElement = getDragAfterElement(todoList, y);
      if (afterElement == null) {
        todoList.appendChild(draggingElement); // Append at the end if no afterElement
      } else {
        todoList.insertBefore(draggingElement, afterElement); // Insert before the identified element
      }
    };

    /**
     * Handles the end of a touch event on mobile. Removes the 'dragging' class and reorders the todos.
     * @param {TouchEvent} e - The touchend event.
     */
    const handleTouchEnd = () => {
      if (draggingElement) {
        draggingElement.classList.remove("dragging");
        setDraggingElement(null);
        reorderTodos(); // Reorder the todos after the touch drag is complete
      }
    };

    /**
     * Finds the element in the container that is closest to the current drag position.
     * This function is used for both desktop drag events and mobile touch events.
     * @param {HTMLElement} container - The container element.
     * @param {number} y - The vertical position of the drag or touch event.
     * @returns {HTMLElement | null} The closest element to the drag or touch position.
     */
    const getDragAfterElement = (container, y) => {
      const draggableElements = [
        ...container.querySelectorAll(".todo:not(.dragging)"),
      ];
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2; // Calculate the vertical offset
          if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    };

    /**
     * Reorders the todos based on the current DOM order after a drag-and-drop or touch drag operation.
     */
    const reorderTodos = () => {
      const reorderedIds = Array.from(todoListRef.current.children).map(
        (child) => Number(child.id) // Get the IDs of todos based on DOM order
      );
      const reorderedTodos = reorderedIds.map((id) =>
        todos.find((todo) => todo.id === id) // Reorder todos array to match new DOM order
      );
      setTodos(reorderedTodos); // Update the todos state with the reordered list
    };

    // Add event listeners for both desktop (drag) and mobile (touch)
    todoList.addEventListener("dragstart", handleDragStart);
    todoList.addEventListener("dragend", handleDragEnd);
    todoList.addEventListener("dragover", handleDragOver);

    todoList.addEventListener("touchstart", handleTouchStart);
    todoList.addEventListener("touchmove", handleTouchMove);
    todoList.addEventListener("touchend", handleTouchEnd);

    // Cleanup event listeners when the component is unmounted or dependencies change.
    return () => {
      todoList.removeEventListener("dragstart", handleDragStart);
      todoList.removeEventListener("dragend", handleDragEnd);
      todoList.removeEventListener("dragover", handleDragOver);

      todoList.removeEventListener("touchstart", handleTouchStart);
      todoList.removeEventListener("touchmove", handleTouchMove);
      todoList.removeEventListener("touchend", handleTouchEnd);
    };
  }, [draggingElement, todos, setTodos]);

  return (
    <div id="todoList" ref={todoListRef}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
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
