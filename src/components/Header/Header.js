import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>        
          <Navbar.Brand href="/"> Blue Games </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/WishList">Favoritos</Nav.Link>
            <Nav.Link href="/Register">Criar Conta</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
)
}