import React from "react";

export default function QuoteCardElement(props) {
  return (
    <div className="border-2 border-gray-900 rounded-lg p-8 shadow-xl hover:bg-yellow-50 transition-all duration-300">
      <h1 className="font-semibold">{props.quoteObj.author}</h1>
      <p className="">{props.quoteObj.content}</p>
      <div className="flex justify-around pt-4">
        <p className="">{props.quoteObj.dateAdded}</p>
        <p className="">{props.quoteObj.length}</p>
      </div>
    </div>
  );
}
