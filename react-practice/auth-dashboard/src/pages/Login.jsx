import React, { useState } from "react";
import Input from "../components/Input";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // for form submiting
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("isAuth", "true");
    navigate("/dashboard");
  };

  return (
    <div className="flex item-center justify-center bg-gray-100 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-80 space-y-4"
      >
        <h2 className="text-center mb-4 text-xl font-bold">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          className="border w-full p-2 mb-2 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border rounded p-2 mb-2 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
        <p className="text-center text-sm">
          Don't Have Account?{""}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
