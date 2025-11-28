import React from 'react';
    import { Trash2 } from 'lucide-react';

    interface TodoItemProps {
      id: string;
      text: string;
      completed: boolean;
      onToggle: (id: string) => void;
      onDelete: (id: string) => void;
    }

    const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
      return (
        <li className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`todo-${id}`}
              className="mr-2 h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              checked={completed}
              onChange={() => onToggle(id)}
            />
            <label htmlFor={`todo-${id}`} className={`text-gray-800 dark:text-gray-200 ${completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
              {text}
            </label>
          </div>
          <button onClick={() => onDelete(id)} className="text-red-500 hover:text-red-700 focus:outline-none">
            <Trash2 className="h-5 w-5" />
          </button>
        </li>
      );
    };

    export default TodoItem;
