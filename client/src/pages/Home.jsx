import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6">

      {/* Hero Section */}
      <section className="text-center py-24">

        <h1 className="text-6xl md:text-7xl font-bold text-green-400 mb-6">
          AlgoArena 🚀
        </h1>

        <p className="text-zinc-300 text-xl max-w-2xl mx-auto mb-10">
          Practice Data Structures & Algorithms,
          compete on the leaderboard, track your
          progress, and improve your coding skills.
        </p>

        <div className="flex justify-center gap-4">

          <Link
            to="/problems"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            Start Solving
          </Link>

          <Link
            to="/leaderboard"
            className="border border-zinc-700 text-white hover:border-green-400 px-6 py-3 rounded-xl transition"          >
            View Leaderboard
          </Link>

        </div>

      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 mb-24">

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 text-green-400">
            Coding Problems
          </h3>

          <p className="text-zinc-400">
            Solve Easy, Medium and Hard problems
            across different topics.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 text-green-400">
            Track Progress
          </h3>

          <p className="text-zinc-400">
            Monitor solved problems, scores and
            submission history from your dashboard.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-green-500 hover:-translate-y-1 transition duration-300" >
          <h3 className="text-xl font-bold mb-3 text-green-400">
            Compete
          </h3>

          <p className="text-zinc-400">
            Climb the leaderboard and compare your
            performance with other users.
          </p>
        </div>

      </section>

      {/* Call To Action */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center mb-20">

        <h2 className="text-4xl font-bold mb-4 text-white">
          Ready to level up your coding?
        </h2>

        <p className="text-zinc-300 mb-8 ">
          Join AlgoArena and start solving problems today.
        </p>

        <Link
          to="/register"
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition"
        >
          Create Account
        </Link>

      </section>

    </div>
  );
}

export default Home;