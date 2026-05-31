import { useEffect, useState } from "react";
import API from "../services/api";

const MySubmissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const res = await API.get(
        "/submissions/my",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setSubmissions(res.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-green-400 mb-8">
        My Submissions
      </h1>

      {submissions.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
          <p className="text-zinc-400 text-lg">
            No submissions yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">

          {submissions.map((submission) => (

            <div
              key={submission._id}
              className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-xl
                p-5
                hover:border-green-500
                transition
                duration-300
              "
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {submission.problem?.title}
                  </h2>

                  <p className="text-zinc-400 mt-1">
                    Language:{" "}
                    <span className="text-white">
                      {submission.language}
                    </span>
                  </p>
                </div>

                <div className="text-right">

                  <p
                    className={`font-semibold text-lg ${
                      submission.verdict === "Accepted"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {submission.verdict}
                  </p>

                  <p className="text-zinc-500 text-sm mt-1">
                    {new Date(
                      submission.createdAt
                    ).toLocaleString()}
                  </p>

                </div>

              </div>
            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default MySubmissions;