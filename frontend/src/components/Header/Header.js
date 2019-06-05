import React, { Component } from 'react';
import './../css/app.css';
import './../css/bootstrap.min.css';

class Header extends Component {
  render() {
    return (

      <div className="jumbotron bg">
		<div className="container">
			<h1 className="display-4">Kanji Learn</h1>
			<p className="lead">Fácil y Rápido</p>
		</div>
	</div>
	
    );
  }
}

export default Header;
