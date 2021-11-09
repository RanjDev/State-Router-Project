import { React, useEffect, useState } from "react";
import axios from "axios";
import QuoteCardElement from "./components/QuoteCardElement";

export default function RandomQuote() {
  const [quote, setQuote] = useState({});
  const [newQuote, setNewQuote] = useState(1);

  useEffect(() => {
    axios.get(`https://api.quotable.io/random`).then((res) => {
      const rndQuote = res.data;
      setQuote(rndQuote);
    });
  }, [newQuote]);

  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center bg-red-100">
      <QuoteCardElement quoteObj={quote} />
      <button
        className="bg-purple-200 p-2 rounded-xl text-blue-800 hover:bg-purple-400 font-semibold transition-all duration-200  "
        onClick={() => {
          setNewQuote(newQuote + 1);
        }}
      >
        New Quote
      </button>
    </div>
  );
}
