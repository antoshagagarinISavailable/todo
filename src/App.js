import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import UsersList from "./Components/meetings app/UsersList";
import MyNavbar from "./Components/Navbar/MyNavbar";
import Layout from "./Components/Layout";
import PageNotFound from "./Components/PageNotFound";
import HomePage from "./Components/HomePage";
import CountersList from "./Components/Basket/CountersList";

function App(props) {
  return (
    <>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="dating" element={<UsersList users={props.users} />} />
          <Route path="basket" element={<CountersList />} />
          <Route path="another" />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
