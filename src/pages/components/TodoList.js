import React from "react";

export default function TodoList({ todo, index, isDoneF, deleted }) {
  return (
    <div>
      <div className="flex justify-between gap-8 border-2 rounded-lg p-2">
        <p className={todo.isDone ? "todo-done" : ""}>{todo.todo}</p>
        <div>
          <button
            onClick={() => deleted(index)}
            className="bg-red-800 text-white px-2 mx-2"
          >
            X
          </button>
          <button
            onClick={() => {
              isDoneF(index);
            }}
            className={
              todo.isDone
                ? "bg-red-500 p-1 rounded-lg"
                : "bg-green-600 p-1 rounded-lg"
            }
          >
            {todo.isDone ? "Not Done" : "Done"}
          </button>
        </div>
        {/* End of button divs */}
      </div>
    </div>
  );
}
