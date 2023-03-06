import React from "react";
import { Badge } from "react-bootstrap";

function Rate(props) {
  return (
    <td>
      {props.rate > 4 ? (
        <Badge pill bg="success">
          {props.rate}
        </Badge>
      ) : props.rate < 4 && props.rate > 3 ? (
        <Badge pill bg="warning">
          {props.rate}
        </Badge>
      ) : (
        <Badge pill bg="danger">
          {props.rate}
        </Badge>
      )}
    </td>
  );
}

export default Rate;
