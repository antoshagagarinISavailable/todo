import React from "react";
import { Badge, Button } from "react-bootstrap";

const Counter = (props) => {
  return (
    <tr>
      <td>
        <p>{props.name}</p>
      </td>

      <td>
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => props.onIncrement(props.id)}
        >
          +
        </Button>
        <Badge className="mx-2" bg="secondary" pill>
          {props.value}
        </Badge>
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => props.onDecrement(props.id)}
        >
          -
        </Button>
      </td>
      <td>
        <Button
          onClick={() => props.handleDelete(props.id)}
          variant="outline-secondary"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Counter;
