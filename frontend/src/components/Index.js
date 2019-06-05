import React, { Component } from 'react';
import './css/app.css';
import './css/bootstrap.min.css';

class Index extends Component {
  render() {
    <div>
       <Header /> 
	 <div className="container">	
		<div className="row">	
			<div className="row">	
				<div className="col-md-6 col-sm-6 col-xs-12">
					<a type="button" className="btn btn-success" id="newUser" onClick={this.handleClickR}>
						Nuevo Usuario
					</a>
				</div>
				<div className="col-md-6 col-sm-6 col-xs-12">
					<a type="button" className="btn btn-primary" id="access" onClick={this.handleClickL}>
						Acceder
					</a>
				</div>
			</div>
		</div>
	</div> 
	</div>
	
    );
  }
}

export default Index;
