import React, { useState } from "react";
import User from "./User";

const UsersList = (props) => {
  const [users, setUsers] = useState(props.users.fetchAll());

  const handleDelete = (_id) => {
    setUsers([...users.filter((el) => el._id != _id)]);
  };

  const spanRender = () => {
    return users.length == 0 ? (
      <span className="badge bg-danger m-1">Никто с тобой не затусит</span>
    ) : users.length > 1 && users.length < 5 ? (
      <span className="badge bg-primary m-1">
        {users.length} человека тусанет с тобой сегодня
      </span>
    ) : (
      <span className="badge bg-primary m-1">
        {users.length} человек тусанет с тобой сегодня
      </span>
    );
  };

  const renderUsers = () => {
    return users.map((el) => (
      <User key={el._id} user={el} onDelete={handleDelete} />
    ));
  };
  return (
    <>
      {spanRender()}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </>
  );
};

export default UsersList;
