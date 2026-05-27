import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const validateForm = () => {

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email";
    }

    if (formData.password.length < 6) {
      return "Password must be at least 6 characters";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {

      const res = await API.post(
        "/auth/login",
        formData
      );

      login(res.data);

      navigate("/");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-2xl w-[400px] border border-zinc-800"
      >

        <h1 className="text-4xl font-bold mb-8 text-green-400 text-center">
          Login
        </h1>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded-lg bg-zinc-800 outline-none"
        />

        <button
          className="w-full bg-green-500 hover:bg-green-600 transition py-3 rounded-lg font-bold"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;