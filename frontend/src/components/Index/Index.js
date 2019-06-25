import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import './../css/app.css';
import './../css/bootstrap.min.css';
import Header from './../Header/Header';
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
//import AuthService from "./../auth/AuthService";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    //this.authService = new AuthService();
   // this.fetchUser();
  }

 /* fetchUser = () => {
    //this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  getUser = user => {
    this.setState({ ...this.state, user });
  };

  logout = () => {
   // this.authService
      .logout()
      .then(() => this.setState({ ...this.state, user: null }));
  };
  */
  render() {
		return(
      <div>
        <Header user={this.state.user} logout={this.logout}/> 
	      <Container>	
		      <Row>	
		      	<Row>	
              {/* <div className="col-md-6 col-sm-6 col-xs-12"> */}
              <Col>
		      			<Link to="/register" type="button" className="btn btn-success" id="newUser">Nuevo Usuario</Link>
		      		</Col>
              {/* <div className="col-md-6 col-sm-6 col-xs-12"> */}
              <Col>
		      			<Link to="/login" type="button" className="btn btn-primary" id="access">Acceder</Link>
		      		</Col>
		      	</Row>
		      </Row>
	    </Container> 
	  </div>
	
    )
  }
}

export default Index;
