import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import User from "./UI/User";
import Pagination from "../UI/Pagination";
import { paginate } from "../../utilites/paginate";

const UsersList = (props) => {
  const [users, setUsers] = useState(props.users.fetchAll());
  const [currentPage, SetCurrentPage] = useState(1);

  const count = users.length;
  const pageSize = 4;

  const userCrop = paginate(users, currentPage, pageSize);

  const handlePageChange = (pageIndex) => {
    SetCurrentPage(pageIndex);
  };

  const handleDelete = (_id) => {
    setUsers([...users.filter((el) => el._id !== _id)]);
  };

  const spanRender = () => {
    return users.length == 0 ? (
      <Badge className="m-2" pill bg="danger">
        Никто с тобой не затусит
      </Badge>
    ) : users.length > 1 && users.length < 5 ? (
      <Badge className="m-2" pill bg="primary">
        {users.length} человека тусанет с тобой сегодня
      </Badge>
    ) : (
      <Badge className="m-2" pill bg="primary">
        {users.length} человек тусанет с тобой сегодня
      </Badge>
    );
  };

  const renderUsers = () => {
    return userCrop.map((el) => (
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
      <Pagination
        itemsCount={count}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default UsersList;
