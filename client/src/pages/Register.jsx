import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

    if (formData.name.trim().length < 3) {
      return "Name must be at least 3 characters";
    }

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

      await API.post(
        "/auth/register",
        formData
      );

      navigate("/login");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Registration Failed"
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
          Register
        </h1>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-zinc-800 outline-none"
        />

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
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;