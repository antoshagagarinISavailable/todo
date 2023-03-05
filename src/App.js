import React from "react";
import "./App.css";
import UsersList from "./Components/UsersList";
import StaticExample from "./Components/StaticExample";

function App(props) {
  return (
    <>
      <StaticExample />
      <UsersList users={props.users} />
    </>
  );
}

export default App;
