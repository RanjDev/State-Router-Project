import { React, useState } from "react";
import TodoInputForm from "./components/TodoInputForm";
import TodoList from "./components/TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      todo: "Use the Todo list wisely",
      isDone: false,
    },
    {
      todo: "No Procrastination",
      isDone: false,
    },
  ]);

  const addTodo = (todo) => {
    const newTodos = [...todos, { todo }];
    console.log(newTodos);
    setTodos(newTodos);
  };

  const isDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const isDeleted = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-yellow-50 p-16 todo-height">
      <div className="h-auto  border-2 border-green-200 rounded-lg p-4 overflow-auto">
        {todos.map((todoy, index) => {
          return (
            <div>
              <TodoList
                todo={todoy}
                index={index}
                isDoneF={isDone}
                deleted={isDeleted}
              />
            </div>
          );
        })}
      </div>
      <TodoInputForm addTodo={addTodo} />
    </div>
  );
}
