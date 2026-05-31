import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import API from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";

function Problems() {

  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProblems = async () => {
      try {

        const res = await API.get("/problems");

        setProblems(res.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };

    fetchProblems();

  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-8 text-white">

      <h1 className="text-4xl font-bold mb-8 text-green-400">
        Problems
      </h1>

      <div className="space-y-4">

        {problems.map((problem) => (

          <Link
            key={problem._id}
            to={`/problems/${problem._id}`}
            className="
              block
              bg-zinc-900
              p-5
              rounded-xl
              border
              border-zinc-800
              hover:border-green-400
              transition
            "
          >

            <div className="flex justify-between items-center">

              <h2 className="text-2xl font-semibold">
                {problem.title}
              </h2>

              <span
                className={`
                  px-3 py-1 rounded-lg text-sm font-bold
                  ${
                    problem.difficulty === "Easy"
                      ? "bg-green-500"
                      : problem.difficulty === "Medium"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }
                `}
              >
                {problem.difficulty}
              </span>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default Problems;