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
          <NavLink
            to="/quote-cards"
            className="text-indigo-700 hover:text-red-900"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
          >
            Quote Cards
          </NavLink>
        </ul>
        <ul className="px-4 flex gap-4">
          <button className="px-2 py-1 rounded-md border-indigo-600 bg-indigo-600  text-white transition-all duration-200 hover:bg-white border-2 hover:text-indigo-600 hover:border-indigo-600">
            Login
          </button>
          <button className="px-2 py-1 rounded-md border-indigo-600 bg-indigo-600  text-white transition-all duration-200 hover:bg-white border-2 hover:text-indigo-600 hover:border-indigo-600">
            Sign Up
          </button>
        </ul>
      </div>
    </div>
  );
}
