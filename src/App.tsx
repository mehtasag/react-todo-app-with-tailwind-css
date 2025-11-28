import React, { useState } from 'react';
    import TodoItem from './components/TodoItem';
    import TodoForm from './components/TodoForm';
    import { v4 as uuidv4 } from 'uuid';

    function App() {
      const [todos, setTodos] = useState<{ id: string; text: string; completed: boolean }[]>([
        { id: uuidv4(), text: 'Learn React', completed: true },
        { id: uuidv4(), text: 'Build a Todo App', completed: false },
        { id: uuidv4(), text: 'Profit!', completed: false },
      ]);

      const handleAddTodo = (text: string) => {
        setTodos([...todos, { id: uuidv4(), text, completed: false }]);
      };

      const handleToggleComplete = (id: string) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };

      const handleDeleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      };

      return (
        <div className="min-h-screen bg-yellow-200 dark:bg-yellow-900 py-6 flex items-center justify-center">
          <div className="container max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">My Todos</h1>
            <TodoForm onAdd={handleAddTodo} />
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  onToggle={handleToggleComplete}
                  onDelete={handleDeleteTodo}
                />
              ))}
            </ul>
          </div>
        </div>
      );
    }

    export default App;
