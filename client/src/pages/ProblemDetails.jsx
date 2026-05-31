import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";

import API from "../services/api";

function ProblemDetails() {

  const { id } = useParams();

  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("java");
  const [verdict, setVerdict] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchProblem = async () => {
      try {

        const res = await API.get(`/problems/${id}`);

        setProblem(res.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchProblem();

  }, [id]);

  const handleSubmit = async () => {

  try {

    setLoading(true);

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    const res = await API.post(
      "/submissions",
      {
        problemId: problem._id,
        code,
        language,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    setVerdict(res.data.verdict);

  } catch (error) {

    console.error(error);

    setVerdict("Submission Failed");
  } finally {

    setLoading(false);
  }
};

  if (!problem) {
    return (
      <div className="text-white text-center mt-20 text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <div className="max-w-5xl mx-auto">

        {/* Title + Difficulty */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-5xl font-bold text-green-400">
            {problem.title}
          </h1>

          <span
            className={`
              px-4 py-2 rounded-xl font-bold
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

        {/* Description */}
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 mb-8">

          <h2 className="text-2xl font-semibold mb-4">
            Description
          </h2>

          <p className="text-zinc-300 leading-8">
            {problem.description}
          </p>

        </div>

        {/* Examples */}
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 mb-8">

          <h2 className="text-2xl font-semibold mb-6">
            Examples
          </h2>

          <div className="space-y-6">

            {problem.examples.map((example, index) => (

              <div
                key={index}
                className="bg-zinc-800 p-5 rounded-xl"
              >

                <h3 className="text-xl font-bold mb-4">
                  Example {index + 1}
                </h3>

                <p className="mb-2">
                  <span className="font-semibold text-green-400">
                    Input:
                  </span>{" "}
                  {example.input}
                </p>

                <p className="mb-2">
                  <span className="font-semibold text-green-400">
                    Output:
                  </span>{" "}
                  {example.output}
                </p>

                <p>
                  <span className="font-semibold text-green-400">
                    Explanation:
                  </span>{" "}
                  {example.explanation}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Constraints */}
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 mb-8">

          <h2 className="text-2xl font-semibold mb-4">
            Constraints
          </h2>

          <p className="text-zinc-300">
            {problem.constraints}
          </p>

        </div>

        {/* Tags */}
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

          <h2 className="text-2xl font-semibold mb-4">
            Tags
          </h2>

          <div className="flex gap-3 flex-wrap">

            {problem.tags.map((tag, index) => (

              <span
                key={index}
                className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl"
              >
                {tag}
              </span>
            ))}

          </div>

          {/* Code Editor */}

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 mt-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-semibold">
                Code Editor
              </h2>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-zinc-800 px-4 py-2 rounded-lg outline-none"
              >
                <option value="java">Java</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
              </select>

            </div>

            <Editor
              height="500px"
              theme="vs-dark"
              language={language}
              value={code}
              onChange={(value) => setCode(value)}
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-6 bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-xl font-bold"
            >
              {loading ? "Submitting..." : "Submit Solution"}
            </button>

            {verdict && (

              <div
                className={`
                  mt-6 p-4 rounded-xl font-bold text-lg
                  ${
                    verdict === "Accepted"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }
                `}
              >
                Verdict: {verdict}
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProblemDetails;