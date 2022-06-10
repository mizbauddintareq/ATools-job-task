import { Container, Nav, Navbar } from "react-bootstrap";

const MenuBar = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <h1 className="fw-bold" style={{ color: "#303d5f" }}>
              ATools<span className="text-danger">.</span>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-none" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                style={{ backgroundColor: "#303d5f" }}
                className="btn mb-3 text-white mx-3 px-3"
              >
                Start free trial
              </Nav.Link>
              <Nav.Link
                style={{ backgroundColor: "#78a1e1" }}
                className="btn mb-3 px-3 text-white"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
