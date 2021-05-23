import Container from 'react-bootstrap/Container'
import{Card, Row, Col}  from 'react-bootstrap'
import {Component} from 'react'
import axios from 'axios'

class ShopDetail extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: '',
      params: props.match
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/items/'+ this.state.params.params.id)
    .then((res) => {
      this.setState({
        data:res.data.data
      })

    })
  }

  render() {
    const item = this.state.data

    return(
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Rp. {item.price} </Card.Text>
                </Card.Body>

              </Card>
            </Col>         
          </Row>
        </Container>
      </div>
    )
  }
}

export default ShopDetail;