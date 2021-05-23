import Container from 'react-bootstrap/Container'
import homepic from '../assets/homepic.jpg'
import {Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './home.css';

// components
import Glance from '../components/glance'

function Home() {
  return(
    <div>
      <Image src={homepic} fluid/>
      <h2 className="title-center">Upgrade Your Gaming Need</h2>
      <Link to="/shop">
        <Button className="button-center" variant="dark">Go To Shop</Button>{' '}
      </Link>
      <Container>
        <h1 className="mb-5">Store at a glance</h1>
        <Glance />
      </Container>
      <h2 className="mt-5">Every Gamer needs a good gear</h2>
    </div>
    );
}

export default Home;