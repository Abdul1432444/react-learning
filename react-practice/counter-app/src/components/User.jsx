import React, { useState, useEffect } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  //   for pagination status
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();

        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log("data is fetching", error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  // for searching with input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );
  //   Pagination login
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const currentUsers = filteredUsers.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center">Users List</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search user..."
        className="border p-2 w-full mb-4 rounded"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // reset page on search
        }}
      />

      {/* Loading */}
      {loading && <p className="text-center">Loading...</p>}

      {/* Users */}
      {!loading &&
        currentUsers.map((user) => (
          <div key={user.id} className="border p-2 mb-2 rounded">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        ))}

      {/* Pagination buttons */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default User;
