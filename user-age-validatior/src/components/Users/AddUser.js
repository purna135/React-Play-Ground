import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    const user = { name: username, age: age, id: Math.random().toString() };
    props.onAddUser(user);
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Usernaem</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        />

        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
