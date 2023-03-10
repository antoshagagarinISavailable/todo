import React from "react";
import { Badge, Button } from "react-bootstrap";

import Qualities from "./Qualities";
import Rate from "./Rate";
import CompletedMeetings from "./CompletedMeetings";

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
      <Qualities renderQualities={renderQualities} />
      <td>{props.user.profession.name}</td>
      <CompletedMeetings completedMeetings={props.user.completedMeetings} />
      <Rate rate={props.user.rate} />

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
