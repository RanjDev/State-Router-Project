import "./App.css";
import NavBar from "./pages/components/NavBar";
import { Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/components/Home";
import RandomQuote from "./pages/RandomQuote";
import QuoteCards from "./pages/QuoteCards";
import QuoteCardDetail from "./pages/QuoteCardDetail";

function App() {
  return (
    <div className="h-screen App bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 overflow-x-hidden ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/random-quote" element={<RandomQuote />} />
        <Route path="/quote-cards" element={<QuoteCards />} />
        <Route path="/quote-cards/:detail" element={<QuoteCardDetail />} />
        <Route
          path="*"
          element={
            <main
              style={{ padding: "1rem" }}
              className="text-center text-4xl text-red-900 font-bold"
            >
              <p>#404, There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
