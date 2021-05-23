import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import './navbar.css'
import {Link} from 'react-router-dom'

function NavbarApp() {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand className="brand">GamersCrib</Navbar.Brand>
      </Link>    
      <Navbar.Collapse >
      <Nav className="justify-content-end">
        <Link to="/login">
          <Nav>Login</Nav>
        </Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>       
    
  );
}

export default NavbarApp;