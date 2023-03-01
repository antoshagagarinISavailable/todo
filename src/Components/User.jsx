import React from "react";

const User = (props) => {
  const renderQualities = () => {
    return props.user.qualities.map((el) => (
      <span className={"badge m-1 bg-" + el.color} key={el._id}>
        {el.name}
      </span>
    ));
  };
  return (
    <tr>
      <td>{props.user.name}</td>
      <td>{renderQualities()}</td>
      <td>{props.user.profession.name}</td>
      <td>{props.user.completedMeetings}</td>
      <td>{props.user.rate}</td>
      <td>
        <button
          onClick={() => props.onDelete(props.user._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
