import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";

function App() {
  const [usersList, setUserList] = useState([]);
  const addUserHandler = (user) => {
    setUserList((prevuser) => {
      return [...prevuser, user];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
