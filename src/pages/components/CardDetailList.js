import React from "react";
import { Link } from "react-router-dom";

export default function CardDetailList(props) {
  return (
    <div className="border-2 border-gray-900 rounded-lg p-8 shadow-xl hover:bg-yellow-50 transition-all duration-300">
      <h1 className="font-semibold p-2">{props.quoteObj.author}</h1>
      <div className="flex justify-around p-2">
        <p className="">{props.quoteObj.dateAdded}</p>
        <p className="">{props.quoteObj.length}</p>
      </div>
      <Link
        to={`/quote-cards/${props.quoteObj.author}`}
        className="bg-indigo-400 transition-all duration-300 hover:bg-indigo-800 hover:text-white rounded-md py-1 px-2"
      >
        Details
      </Link>
    </div>
  );
}
