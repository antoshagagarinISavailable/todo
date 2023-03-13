import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          My React Practice
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/dating">
              Dating
            </Link>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
            <Link className="nav-link" to="/dragndrop">
              Drag and drop
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
