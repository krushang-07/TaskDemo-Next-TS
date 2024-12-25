import AddTodo from '@/components/add-todos';
import Navbar from '@/components/navbar';
import Todos from '@/components/todos';
import React from 'react';

export default function Page() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('bg.jpeg')", // Replace with your image path
      }}
    >
      <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl w-full max-w-3xl p-6 animate-fade-in">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
           Techy-<span className="text-blue-900">Task</span>
          </h1>
        </header>
        <Navbar />
        <main className="space-y-6 mt-6">
          <AddTodo />
          <Todos />
        </main>
      </div>
    </div>
  );
}
