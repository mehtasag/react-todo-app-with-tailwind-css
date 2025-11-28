import React, { useState } from 'react';

    interface TodoFormProps {
      onAdd: (text: string) => void;
    }

    const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
      const [text, setText] = useState('');

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() !== '') {
          onAdd(text);
          setText('');
        }
      };

      return (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex">
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
              placeholder="Add a todo..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2" type="submit">
              Add
            </button>
          </div>
        </form>
      );
    };

    export default TodoForm;
