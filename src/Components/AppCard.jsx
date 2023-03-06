import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppCard(props) {
  const DateFromStartRender = () => {
    let hoursLast = (Date.now() - Date.parse(props.date)) / 3.6e6;

    return (Math.floor(hoursLast / 24) == 1 &&
      Math.floor(hoursLast % 24) < 2) ||
      (Math.floor(hoursLast / 24) == 21 && Math.floor(hoursLast % 24) < 2) ? (
      <p>
        {Math.floor(hoursLast / 24)}
        {" day "}
        {Math.floor(hoursLast % 24)}
        {" hour ago"}
      </p>
    ) : (hoursLast > 48 && Math.floor(hoursLast % 24) >= 2) ||
      (Math.floor(hoursLast) == 11 && Math.floor(hoursLast % 24) >= 2) ? (
      <p>
        {Math.floor(hoursLast / 24)}
        {" days "}
        {Math.floor(hoursLast % 24)}
        {" hours ago"}
      </p>
    ) : (hoursLast > 48 && hoursLast < 49) ||
      (Math.floor(hoursLast) == 11 && hoursLast < 49) ? (
      <p>
        {Math.floor(hoursLast / 24)}
        {" days "}
        {Math.floor(hoursLast % 24)}
        {" hours ago"}
      </p>
    ) : hoursLast > 24 && hoursLast < 48 ? (
      <p>
        {"One day "}
        {Math.floor(hoursLast % 24)}
        {" hours ago"}
      </p>
    ) : hoursLast < 1 ? (
      <p>{"less than hour ago"}</p>
    ) : Math.floor(hoursLast) == 1 || Math.floor(hoursLast) % 10 == 1 ? (
      <p>
        {Math.floor((Date.now() - Date.parse(props.date)) / 3.6e6)}
        {" hour ago"}
      </p>
    ) : (
      <p>
        {Math.floor((Date.now() - Date.parse(props.date)) / 3.6e6)}
        {" hours ago"}
      </p>
    );
  };
  return (
    <Card className="text-center">
      <Card.Header>Created</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">
          <Link className="nav-link" to={props.link}>
            Take a look
          </Link>
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">{DateFromStartRender()}</Card.Footer>
    </Card>
  );
}

export default AppCard;
