import React from "react";
import { Badge, Button } from "react-bootstrap";

const User = (props) => {
  const renderQualities = () => {
    return props.user.qualities.map((el) => (
      <Badge pill className={"badge m-1 bg-" + el.color} key={el._id}>
        {el.name}
      </Badge>
    ));
  };
  return (
    <tr>
      <td>{props.user.name}</td>
      <td>{renderQualities()}</td>
      <td>{props.user.profession.name}</td>
      <td>
        <Badge pill bg="dark">
          {props.user.completedMeetings}
        </Badge>
      </td>
      <td>
        {props.user.rate > 4 ? (
          <Badge pill bg="success">
            {props.user.rate}
          </Badge>
        ) : props.user.rate < 4 && props.user.rate > 3 ? (
          <Badge pill bg="warning">
            {props.user.rate}
          </Badge>
        ) : (
          <Badge pill bg="danger">
            {props.user.rate}
          </Badge>
        )}
      </td>

      <td>
        <Button
          onClick={() => props.onDelete(props.user._id)}
          variant="outline-danger"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default User;
