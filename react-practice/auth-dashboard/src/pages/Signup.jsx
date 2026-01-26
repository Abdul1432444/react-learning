import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    console.log({ name, email, password });
    navigate("/login");
  };
  return (
    <div className="flex item-center justify-center bg-gray-100 min-h-screen">
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 rounded-xl shadow-lg w-80 space-y-4 "
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <input
          label="name"
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.name)}
        />
        <input
          label="email"
          type="email"
          value={email}
          placeholder="Enter your name"
          onChange={(e) => setEmail(e.target.email)}
        />
        <input
          label="password"
          type="password"
          value={password}
          placeholder="Enter your name"
          onChange={(e) => setPassword(e.target.password)}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2
                     rounded-lg hover:bg-green-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
