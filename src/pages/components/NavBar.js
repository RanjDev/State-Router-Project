import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div className="flex items-center justify-between h-16 bg-blue-200">
        <ul className="px-4 flex gap-4">
          <NavLink
            to="/"
            className={"text-indigo-700 font-semibold hover:text-red-900"}
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/todo"
            className="text-indigo-700 hover:text-red-900"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
          >
            Todo App
          </NavLink>
          <NavLink
            to="/random-quote"
            className="text-indigo-700 hover:text-red-900"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
          >
            Random Quote
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
