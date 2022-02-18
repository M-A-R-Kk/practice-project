import React, { useState } from "react";
import Card from "./UI/Card";
import classes from "./AddUser.module.css";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";
import Wrapper from "./Helpers/Wrapper";
function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");
  function AddUserHandler(event) {
    event.preventDefault();
    setEnteredUsername("");
    setEnteredAge("");
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Input Error",
        message: "Enter username and age!",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Input Error",
        message: "Enter age (> 0)!",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }
  function closeError() {
    setError(null);
  }
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="text"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}
export default AddUser;
