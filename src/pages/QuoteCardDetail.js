import React from "react";
import { useParams } from "react-router-dom";

export default function QuoteCardDetail() {
  const params = useParams();
  // You can have a condition here to say
  // if the route didn't exist, return something to say doesn't exisit
  return (
    <div>
      <p className="text-xl text-center text-white">{params.detail}</p>
    </div>
  );
}
