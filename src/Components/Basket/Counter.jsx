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
        {/* <Badge className="mx-2" bg="secondary" pill>
          {props.value}
        </Badge> */}
        {props.value < 0 ? (
          <Badge className="mx-2" bg="danger" pill>
            {"total: "}
            {props.value}
          </Badge>
        ) : props.value == 0 ? (
          <Badge className="mx-2" bg="warning" pill>
            empty!
          </Badge>
        ) : (
          <Badge className="mx-2" bg="secondary" pill>
            {"total: "}
            {props.value}
          </Badge>
        )}
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => props.onDecrement(props.id)}
        >
          -
        </Button>
      </td>
      <td>
        <Badge className="mx-2" bg="secondary">
          &#36; {props.price * props.value}
        </Badge>
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
