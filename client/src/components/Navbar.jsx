import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 px-8 py-4 flex justify-between items-center">

      <Link
        to="/"
        className="text-2xl font-bold text-green-400"
      >
        AlgoArena
      </Link>

      <div className="flex gap-6 text-white">

        <Link to="/">Home</Link>

        <Link to="/dashboard"> Dashboard </Link>

        <Link to="/problems">Problems</Link>

        <Link to="/leaderboard">Leaderboard</Link>

        <Link to="/my-submissions"> Submissions </Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>



      </div>
    </nav>
  );
}

export default Navbar;