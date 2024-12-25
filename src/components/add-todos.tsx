"use client";
import useTodos from '@/store/todos';
import React, { useState } from 'react';

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim()) {
      handleAddTodo(todo);
      setTodo("");
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md space-x-4"
    >
      <input
        type="text"
        className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a Task"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-900 transition duration-300"
      >
        Add
      </button>
    </form>
  );
}
