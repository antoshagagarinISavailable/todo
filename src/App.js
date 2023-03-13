import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "react-bootstrap";
import UsersList from "./Components/Dating app/UsersList";
import MyNavbar from "./Components/Navbar/MyNavbar";
import Layout from "./Components/Layout";
import PageNotFound from "./Components/PageNotFound";
import HomePage from "./Components/HomePage";
import ItemsList from "./Components/Cart/ItemsList";
import Dragndrop from "./API/API/Drag-and-drop/Dragndrop";

function App(props) {
  return (
    <>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dating" element={<UsersList users={props.users} />} />
          <Route path="cart" element={<ItemsList />} />
          <Route path="dragndrop" element={<Dragndrop />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
