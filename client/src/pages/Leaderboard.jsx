import { useEffect, useState } from "react";
import API from "../services/api";

const Leaderboard = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const res = await API.get("/users/leaderboard");
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-green-400 mb-8">
        🏆 Leaderboard
      </h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg shadow-green-900/20">

        <table className="w-full">

          <thead>
            <tr className="bg-zinc-800">

              <th className="p-4 text-left">
                Rank
              </th>

              <th className="p-4 text-left">
                User
              </th>

              <th className="p-4 text-left">
                Score
              </th>

              <th className="p-4 text-left">
                Solved
              </th>

            </tr>
          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.rank}
                className="
                  border-b
                  border-zinc-800
                  hover:bg-zinc-800
                  transition
                "
              >

                <td className="p-4 font-semibold">

                  {user.rank === 1
                    ? "🥇 #1"
                    : user.rank === 2
                    ? "🥈 #2"
                    : user.rank === 3
                    ? "🥉 #3"
                    : `#${user.rank}`}

                </td>

                <td className="p-4">
                  {user.name}
                </td>

                <td className="p-4 text-green-400 font-bold">
                  {user.score}
                </td>

                <td className="p-4">
                  {user.solvedCount}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Leaderboard;