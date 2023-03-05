import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Sorry</Alert.Heading>
      <p>
        The page you are looking for does not exist. Click the button to go Home
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button variant="outline-success">
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </Button>
      </div>
    </Alert>
  );
};

export default PageNotFound;
