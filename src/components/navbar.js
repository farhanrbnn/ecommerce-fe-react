import Navbar from 'react-bootstrap/Navbar'
import './navbar.css'
import {Link} from 'react-router-dom'

function NavbarApp() {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand className="brand">GamersCrib</Navbar.Brand>
      </Link>    
    </Navbar>       
  );
}

export default NavbarApp;