import Container from 'react-bootstrap/Container'
import homepic from '../assets/homepic.jpg'
import Image from 'react-bootstrap/Image'

// components
import Glance from '../components/glance'

function Home() {
  return(
    <div>
      <Image src={homepic} fluid/>
      <Container>
        <h1>Store at a glance</h1>
        <Glance />
      </Container>
    </div>
    );
}

export default Home;