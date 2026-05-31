import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 px-8 py-4 flex justify-between items-center">

      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-bold text-green-400 hover:text-green-300 transition"
      >
        AlgoArena
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6 text-white">

        <Link
          to="/"
          className="hover:text-green-400 transition"
        >
          Home
        </Link>

        <Link
          to="/problems"
          className="hover:text-green-400 transition"
        >
          Problems
        </Link>

        <Link
          to="/leaderboard"
          className="hover:text-green-400 transition"
        >
          Leaderboard
        </Link>

        {user && (
          <>
            <Link
              to="/dashboard"
              className="hover:text-green-400 transition"
            >
              Dashboard
            </Link>

            <Link
              to="/my-submissions"
              className="hover:text-green-400 transition"
            >
              Submissions
            </Link>

            {/* Username */}
            <span className="text-green-400 font-medium border-l border-zinc-700 pl-4">
              Hi, {user.name}
            </span>

            <button
              onClick={handleLogout}
              className="
                bg-red-500
                hover:bg-red-600
                px-4
                py-2
                rounded-lg
                font-medium
                transition
              "
            >
              Logout
            </button>
          </>
        )}

        {!user && (
          <>
            <Link
              to="/login"
              className="hover:text-green-400 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="
                bg-green-500
                hover:bg-green-600
                px-4
                py-2
                rounded-lg
                font-medium
                transition
              "
            >
              Register
            </Link>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;