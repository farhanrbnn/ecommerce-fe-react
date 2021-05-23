import {Component} from 'react'
import{Card, Row, Col}  from 'react-bootstrap'
import axios from 'axios'

class Glance extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/items')
    .then((res) => {
      this.setState({
        data:res.data.data
      })

    })
  }


  render() {
    const {data} = this.state;
    const mountData = []

    for(let i = 0; i < data.length; i++) {
      if(i <= 3) {
        mountData.push(data[i])
      }
    }

    const test = false

    const teskondisi = () => {
      if(test) {
        return <h1>ini benar</h1>
      } else {
        return <h1>ini salah</h1>
      }
    }

    return(
      <div>
        {teskondisi()}
        <Row>
          {mountData.map(item => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Rp. {item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }

}



export default Glance;