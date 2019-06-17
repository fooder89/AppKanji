import React, { Component } from 'react';
import './../css/app.css';
import './../css/bootstrap.min.css';
import Header from './../Header/Header';
import { Link } from 'react-router-dom';
//import AuthService from "./../auth/AuthService";

class Index extends Component {
  constructor() {
    super();

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
	 <div className="container">	
		<div className="row">	
			<div className="row">	
				<div className="col-md-6 col-sm-6 col-xs-12">
					<Link to="/register" type="button" className="btn btn-success" id="newUser">Nuevo Usuario</Link>
				</div>
				<div className="col-md-6 col-sm-6 col-xs-12">
					<Link to="/login" type="button" className="btn btn-primary" id="access">Acceder</Link>
				</div>
			</div>
		</div>
	</div> 
	</div>
	
    )
  }
}

export default Index;
