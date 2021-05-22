import Navbar from 'react-bootstrap/Navbar'
import './navbar.css'

function NavbarApp() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="brand" href="#home">GamersCrib</Navbar.Brand>
    </Navbar>       
  );
}

export default NavbarApp;