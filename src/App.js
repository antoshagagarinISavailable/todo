import React from "react";
import "./App.css";
import UsersList from "./Components/UsersList";

function App(props) {
  return <UsersList users={props.users} />;
}

export default App;
