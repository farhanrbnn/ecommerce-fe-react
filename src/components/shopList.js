import {Component} from 'react'
import axios from 'axios'
import{Card, Row, Col}  from 'react-bootstrap'
import {Link} from 'react-router-dom' 

class ShopList extends Component{
  constructor(props){
    super(props);
      this.state = {
      data: []
    };

  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/items')
    .then((res) => {
         let chunkedArr = []
      let array = res.data.data
      if (array) {
        for (let i = 0; i < array.length; i++) {
          let last = chunkedArr[chunkedArr.length - 1]
          if (!last || last.length === 4) {
            chunkedArr.push([array[i]])
          } else {
            last.push(array[i])
          }
        }
      }
      this.setState({
        data: chunkedArr
      })
    })
  }

  render() {
    const {data} = this.state;
    return(
      <div>
        {data.map((val,index) => (
          <Row key={index} className="mt-3">
            {val.map((item) => (
              <Col key={item._id} lg={3}>
              <Link to={`/shop/${item._id}`}>
               <Card >
                 <Card.Body>
                  <Card.Img variant="top" src={item.picture} />
                   <Card.Title>{item.name}</Card.Title>
                 </Card.Body>
               </Card>
             </Link>
             </Col>
            ))}        
        </Row>
        ))}
  
      </div>
    );
  }
}

export default ShopList;