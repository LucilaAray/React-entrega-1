import styles from './navbarsearch.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';

const NavBarSearch = () => {
    return (
        <Navbar expand="lg" className="bg-nav ">
        <Container fluid>
          <Navbar.Brand href="#">0800</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Side A</Nav.Link>
              <Nav.Link href="#action2">Side B</Nav.Link>
            </Nav>
            <Nav.Link href="#action3" className="me-2"> <CartWidget/>1 </Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
      
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavBarSearch;








