import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Problems from "./pages/Problems";
import ProblemDetails from "./pages/ProblemDetails";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-black">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/problems" element={<Problems />} />

          <Route path="/problems/:id" element={<ProblemDetails />} />

          <Route path="/leaderboard" element={<Leaderboard />} />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;