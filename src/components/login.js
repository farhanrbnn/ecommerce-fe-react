import {Component} from 'react'
import{Card, Row, Col}  from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router-dom";
import axios from 'axios'

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password:''
    };

    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUserName(event) {
    this.setState({userName: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    try {
      axios.post('http://localhost:5000/api/v1/user/auth', this.state)
      .then((res) => {
        this.props.history.push('/shop')       
      })
      .catch((err) => {
        console.log(err)
      })

    } catch (err) {
      alert(err)
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Container>
          <Row className={'justify-content-center mt-5'}>
            <Col lg={8}>
              <Card>
                <Card.Body>
                  <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={this.state.userName} onChange={this.handleChangeUserName} />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword}/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                </Card.Body>    
              </Card>         
            </Col>   
          </Row>
        </Container>
      </div>
  
    );
  }
}

export default Login;