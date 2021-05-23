import Container from 'react-bootstrap/Container'
import ShopList from '../components/shopList'

function Shop(){
  return(
    <div>
      <h1>Shop</h1>
      <Container>
        <ShopList/>
      </Container>
    </div>
  )
}

export default Shop;