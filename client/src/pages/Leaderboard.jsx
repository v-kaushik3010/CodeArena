import { useEffect, useState } from "react";

import API from "../services/api";

function Leaderboard() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchLeaderboard = async () => {
      try {

        const res = await API.get("/users/leaderboard");

        setUsers(res.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchLeaderboard();

  }, []);

  return (
    <div className="p-8 text-white">

      <h1 className="text-4xl font-bold mb-8 text-green-400">
        Leaderboard
      </h1>

      <div className="space-y-4">

        {users.map((user) => (

          <div
            key={user.rank}
            className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 flex justify-between"
          >

            <div>
              <h2 className="text-2xl font-semibold">
                #{user.rank} {user.name}
              </h2>

              <p className="text-zinc-400">
                Solved: {user.solvedCount}
              </p>
            </div>

            <div className="text-green-400 text-2xl font-bold">
              {user.score} pts
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Leaderboard;