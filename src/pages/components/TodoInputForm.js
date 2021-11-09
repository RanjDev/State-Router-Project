import React from "react";

export default function TodoInputForm({ addTodo }) {
  const [todoState, setTodoState] = React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(todoState);
    addTodo(todoState);
    setTodoState("");
  };
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <label>
          What to do?
          <input
            type="text"
            name="name"
            value={todoState}
            onChange={(e) => setTodoState(e.target.value)}
            className=" bg-blue-300 rounded-lg mx-2 focus:bg-blue-500"
          />
        </label>
      </form>
    </div>
  );
}
