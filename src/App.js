import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import Wrapper from "./components/Helpers/Wrapper";
function App() {
  const [usersList, setUsersList] = useState([]);
  function addUserHandler(uName, uAge) {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  }
  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Wrapper>
  );
}

export default App;
