const UserList = ({ users, onDelete }) => {
  if (users.length === 0) {
    return <p className="text-gray-500">No users found</p>;
  }

  return (
    <div className="bg-white rounded shadow">
      {users.map((user) => (
        <div key={user.id} className="flex justify-between p-3 border-b">
          <span>
            {user.name} ({user.email})
          </span>

          <button onClick={() => onDelete(user.id)} className="text-red-500">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
