import { useState } from "react";

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) return;

    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h3 className="text-lg font-bold">Add User</h3>

      <input
        className="border w-full p-2 rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border w-full p-2 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Save
      </button>
    </form>
  );
};

export default UserForm;
