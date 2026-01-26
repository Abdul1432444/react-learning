import React, { useState } from "react";
import Layout from "../components/Layout";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import Modal from "../components/Modal";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState("");

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
    setIsOpen(false);
  };

  const deleteUser = (id) => [setUsers(users.filter((u) => u.id !== id))];

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Users</h2>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </div>

      <UserList users={users} onDelete={deleteUser} />

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <UserForm onSubmit={addUser} />
        </Modal>
      )}
    </Layout>
  );
};

export default Users;
