"use client";
import useTodos from "@/store/todos";
import { useSearchParams } from "next/navigation";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodos();
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");

  let filteredTodos: string = todos;

  if (todosFilter === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (todosFilter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <ul className="space-y-4">
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md transition duration-300 ${
            todo.completed ? "opacity-50" : "hover:shadow-lg"
          }`}
        >
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
              className="w-5 h-5 text-blue-500 rounded focus:ring focus:ring-blue-300"
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className={`text-lg ${
                todo.completed ? "line-through text-gray-400" : "text-gray-700"
              }`}
            >
              {todo.task}
            </label>
          </div>
          {todo.completed && (
            <button
              type="button"
              onClick={() => handleTodoDelete(todo.id)}
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
