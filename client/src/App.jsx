import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Problems from "./pages/Problems";
import ProblemDetails from "./pages/ProblemDetails";
import Leaderboard from "./pages/Leaderboard";
import Dashboard from "./pages/Dashboard";
import MySubmissions from "./pages/MySubmissions";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen flex flex-col bg-black text-white">

        <Navbar />

        <main className="flex-grow">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/problems" element={<Problems />} />

          <Route path="/problems/:id" element={<ProblemDetails />} />

          <Route path="/leaderboard" element={<Leaderboard />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/my-submissions"
            element={
              <ProtectedRoute>
                <MySubmissions />
              </ProtectedRoute>
            }
          />
          
          <Route path="*" element={<NotFound />} />

        </Routes>
        </main> 

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;