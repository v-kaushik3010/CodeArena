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

      <h1 className="text-4xl font-bold mb-8">
        My Submissions
      </h1>

      <div className="bg-zinc-900 rounded-xl overflow-hidden">

        <table className="w-full">

          <thead>
            <tr className="border-b border-zinc-700">

              <th className="p-4 text-left">
                Problem
              </th>

              <th className="p-4 text-left">
                Language
              </th>

              <th className="p-4 text-left">
                Verdict
              </th>

              <th className="p-4 text-left">
                Date
              </th>

            </tr>
          </thead>

          <tbody>

            {submissions.map((submission) => (

              <tr
                key={submission._id}
                className="border-b border-zinc-800"
              >

                <td className="p-4">
                  {submission.problem?.title}
                </td>

                <td className="p-4">
                  {submission.language}
                </td>

                <td
                  className={`p-4 ${
                    submission.verdict === "Accepted"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {submission.verdict}
                </td>

                <td className="p-4">
                  {new Date(
                    submission.createdAt
                  ).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default MySubmissions;