import React, { Component } from 'react';
import './../css/app.css';
import './../css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
	<div class="container">	
		<div class="row">	
			<div class="panel-body">
				<form method ="POST" id="formRegister" action="http://localhost:8001/api/reguser/">
				<div class="col-md-6 col-sm-6 col-xs-12">
					<input type="text" name="name" id="name" class="form-control" placeholder="Usuario" required="required" autofocus="" />
				</div>
				<div class="col-md-6 col-sm-6 col-xs-12">
					<label for="inputPassword" class="sr-only">Password</label>
					<input type="password" name="pass" id="pass" class="form-control" placeholder="Password" required="required" />		
				</div>
				<div class="col-md-6 col-sm-6 col-xs-12">
				    {/*<Link to="/main">*/}
						<button class="btn btn-success form-control" id="registerButton" type="submit">Registrar</button>
					{/*</Link>*/}
				</div>
				</form>
			</div>
		</div>
	</div>
	
    );
  }
}

export default Register;
