import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">

      <h1 className="text-7xl font-bold text-green-400 mb-4">
        404
      </h1>

      <h2 className="text-3xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p className="text-zinc-400 mb-8">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl transition"
      >
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;