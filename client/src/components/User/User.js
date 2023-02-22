import { useState, useEffect } from "react";
import "./User.css";

function UserSelect() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUserName, setNewUserName] = useState({ name: "", phone: "" });
  const [addingUser, setAddingUser] = useState(false);

  // Fetch users from database
  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // Handler for selecting a user from the dropdown
  function handleUserSelect(event) {
    setSelectedUser(event.target.value);
  }

  // Handler for adding a new user to the database
  function handleAddUser() {
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: newUserName }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data]);
        setSelectedUser(data.id);
        setNewUserName("");
        setAddingUser(!addingUser);
      });
  }

  // Handler for submitting the selected user
  function handleSubmit() {
    // Do something with selectedUser
  }

  return (
    <div>
      <label htmlFor="user-select">Select a user:</label>
      <select id="user-select" value={selectedUser} onChange={handleUserSelect}>
        <option value="">-- Select User --</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <br />
      <button onClick={handleAddUser}>Add User</button>
      {/* <input
        type="text"
        value={newUserName}
        onChange={(event) => setNewUserName(event.target.value)}
      /> */}
      <br />
      {addingUser && (
        <div>
          <span>add user details</span>
          <input
            value={newUserName.name}
            onChange={(event) => setNewUserName(event.target.value)}
          />
          <input
            value={newUserName.phone}
            onChange={(event) => setNewUserName(event.target.value)}
          />
        </div>
      )}
      <button onClick={handleSubmit} disabled={!selectedUser}>
        Submit
      </button>
    </div>
  );
}

export default UserSelect;
