import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand to="/" as={Link} className="fs-3 text-white">
          ClotheStore
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler-icon-white"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link} className="text-white">
              Products
            </Nav.Link>
            <Nav.Link to="/men" as={Link} className="text-white">
              Men
            </Nav.Link>
            <Nav.Link to="/women" as={Link} className="text-white">
              Women
            </Nav.Link>
            <Nav.Link to="/kids" as={Link} className="text-white">
              Kids
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2 me-2"
            />
            <Button variant="secondary" className="me-5">
              Search
            </Button>
          </Form>
          <Navbar.Text className="ms-3">
            <Nav.Link to="/cart" as={Link} className="text-white">
              <FiShoppingCart className="fs-5" /> {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
          <Button to="/signin" as={Link} variant="secondary" className="ms-3">
            Sign In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
