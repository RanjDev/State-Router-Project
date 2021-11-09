import { React, useState, useEffect } from "react";
import axios from "axios";
import CardDetailList from "./components/CardDetailList";

export default function QuoteCards() {
  const [quote, setQuote] = useState([]);
  const [newQuote, setNewQuote] = useState(1);

  useEffect(() => {
    axios.get(`https://api.quotable.io/random`).then((res) => {
      const rndQuote = res.data;

      const newQuoteArray = [...quote, rndQuote];
      setQuote(newQuoteArray);
    });
  }, [newQuote]);

  return (
    <div className="todo-height w-screen bg-gray-100">
      <button
        className="mt-8 bg-purple-200 p-2 rounded-xl text-blue-800 hover:bg-purple-400 hover:text-white font-semibold transition-all duration-300  "
        onClick={() => {
          setNewQuote(newQuote + 1);
        }}
      >
        Add New Quote +
      </button>
      <div className="h-auto p-8 flex flex-row flex-wrap gap-8 items-center justify-center bg-gray-100 ">
        {quote.map((singleQuote) => {
          return <CardDetailList quoteObj={singleQuote} />;
        })}
      </div>
    </div>
  );
}
