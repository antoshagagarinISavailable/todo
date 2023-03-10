import React from "react";
import { Badge } from "reactstrap";

function CompletedMeetings(props) {
  return (
    <td>
      <Badge pill bg="dark">
        {props.completedMeetings}
      </Badge>
    </td>
  );
}

export default CompletedMeetings;
