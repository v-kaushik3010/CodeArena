import { useEffect, useState } from "react";
import API from "../services/api";

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
    return (
      <div className="text-center mt-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">

      <div className="bg-zinc-900 rounded-xl p-6 mb-8">

        <h1 className="text-4xl font-bold mb-4">
          Dashboard
        </h1>

        <p>
          <strong>Name:</strong> {user.name}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Score:</strong> {user.score}
        </p>

        <p>
          <strong>Solved Problems:</strong>{" "}
          {user.solvedProblems?.length || 0}
        </p>

      </div>

      <div className="bg-zinc-900 rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Recent Submissions
        </h2>

        {submissions.map((submission) => (

          <div
            key={submission._id}
            className="border-b border-zinc-700 py-4"
          >
            <p>
              {submission.problem?.title}
            </p>

            <p>
              {submission.language}
            </p>

            <p
              className={
                submission.verdict === "Accepted"
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {submission.verdict}
            </p>
          </div>

        ))}

      </div>

    </div>
  );
};

export default Dashboard;