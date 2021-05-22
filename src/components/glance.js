import {Component} from 'react'
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

      console.log(this.state.data)
    })
  }


  render() {
    return(
      <div>
        <h1>test</h1>
      </div>
    );
  }

}



export default Glance;