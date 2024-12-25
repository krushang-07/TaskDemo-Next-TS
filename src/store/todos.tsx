'use client'

import {createContext, ReactNode, useContext, useState} from "react";

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type TodosContext = {
    todos: Todo[];

    /* directly defined in the function with out explicit */


    //handleAddTodo: (task: string) => void; //call signature
    //toggleTodoAsCompleted: (id: string) => void;
    //handleTodoDelete: (id: string) => void;
}

export const todosContext = createContext(null);


export function TodosProvider({ children }: { children: ReactNode }) { 

    const [todos, setTodos] = useState<Todo[]>(() => {
        try{
        const newTodos = localStorage.getItem('todos') || "[]";
        return JSON.parse(newTodos) as Todo[]
        }catch (e) {
            return []
        }

    }) //an array of Todo objects

    // Store the Todo task in localstorage 
    function savedInLocalStorage(newTodos: Todo[]):void {
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    function handleAddTodo(task: string):void {
        // it ensures that the newTodos variable is declared and initialized before returning it.
        setTodos((prev) => {
            // we will create a new array
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task,
                    completed: false,
                    createdAt: new Date(),
                },
                ...prev,
            ];
            savedInLocalStorage(newTodos);
            return newTodos;
        })
       
    }

    // toggleTodoAsCompleted
    const toggleTodoAsCompleted = (id: string):void => {
        // function toggleTodoAsCompleted(id:string) {
        setTodos((prev) => {
            const newTodos = prev.map((task) => {
                if (task.id === id) {
                    return {...task, completed: !task.completed}
                }
                return task;
            })
            savedInLocalStorage(newTodos);
            return newTodos;
        })
    }

    // handleDeleteTodo
    function handleTodoDelete(id: string):void {
        setTodos((prev) => {
            const newTodos = prev.filter((task) => task.id !== id)
            savedInLocalStorage(newTodos);
            return newTodos;
        });

    }



    return (
        <todosContext.Provider value={{todos, handleAddTodo,toggleTodoAsCompleted,handleTodoDelete}}>
            {children}
        </todosContext.Provider>
    );
}

//create a custom hook for the useContext() directly use
export default function useTodos() {
    
    const todosContextValue = useContext(todosContext);
    if (!todosContextValue) {
        throw new Error("useTodos used outside of Provider");
    }

    return todosContextValue;

}

