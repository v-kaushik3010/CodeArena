import { useEffect, useState } from "react";
import API from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const localUser = JSON.parse(
        localStorage.getItem("user")
      );

      const token = localUser.token;

      const userRes = await API.get(
        "/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const submissionRes = await API.get(
        "/submissions/my",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(userRes.data);
      setSubmissions(submissionRes.data);
    } catch (error) {
      console.error(error);
    }
  };



    if (!user) {
        return <LoadingSpinner />;
    }

  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-zinc-400 text-sm mb-2">
            Score
          </h3>

          <p className="text-4xl font-bold text-green-400">
            {user.score}
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-zinc-400 text-sm mb-2">
            Solved Problems
          </h3>

          <p className="text-4xl font-bold text-blue-400">
            {user.solvedProblems?.length || 0}
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-zinc-400 text-sm mb-2">
            Account
          </h3>

          <p className="font-semibold text-lg">
            {user.name}
          </p>

          <p className="text-zinc-400 text-sm">
            {user.email}
          </p>
        </div>

      </div>

      {/* Recent Submissions */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Recent Submissions
        </h2>

        {submissions.length === 0 ? (
          <p className="text-zinc-400">
            No submissions yet.
          </p>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b border-zinc-700">

                  <th className="text-left p-4">
                    Problem
                  </th>

                  <th className="text-left p-4">
                    Language
                  </th>

                  <th className="text-left p-4">
                    Verdict
                  </th>

                  <th className="text-left p-4">
                    Date
                  </th>

                </tr>
              </thead>

              <tbody>

                {submissions
                  .slice(0, 5)
                  .map((submission) => (

                    <tr
                      key={submission._id}
                      className="border-b border-zinc-800 hover:bg-zinc-800/40 transition"
                    >

                      <td className="p-4">
                        {submission.problem?.title}
                      </td>

                      <td className="p-4 capitalize">
                        {submission.language}
                      </td>

                      <td
                        className={`p-4 font-medium ${
                          submission.verdict === "Accepted"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {submission.verdict}
                      </td>

                      <td className="p-4 text-zinc-400">
                        {new Date(
                          submission.createdAt
                        ).toLocaleDateString()}
                      </td>

                    </tr>

                  ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
};

export default Dashboard;