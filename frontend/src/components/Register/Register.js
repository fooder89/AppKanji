import React, { Component } from 'react';
import './../css/app.css';
import './../css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import axios from "axios";
import { connect } from "react-redux";
import { userDataLoaded } from "../../redux/actions/index"
import storage from 'redux-persist/lib/storage'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const mapDispatchToProps = (dispatch) => {
	return {
	  userDataLoaded: (obj) => dispatch(userDataLoaded(obj)),
	};
  }

class Register extends Component {
	state = {
		userdata: {
				experiencia: 0,
				id: 0,
				nivel: 0,
				nombre: "",		
				password: ""
			},
		islogin: false
		};
		
		handleSubmit = (event) => {
			event.preventDefault();
			console.log("EVENT ONSUBMIT",event)
			const usuario = {
					name: `${this.state.userdata.name}`,
					pass: `${this.state.userdata.pass}`
			};
			console.log("EVENT ONSUBMIT",event,usuario)
			if (!this.state.islogin) {
	
							axios({
								method: 'post',
								url: "http://localhost:8001/api/reguser",
								data: usuario
						})
								.then(res => {
										console.log(res);
										console.log("res.data " ,res.data);
									//	this.props.getUserData(res.data)
										this.setState({
											islogin: true,
											userdata: res.data
										});
										 
										//window.location = "/main"
										
								})
	
								.catch(err => {
										console.log("ERR",err,this.state.userdata,"user: ",usuario.name,"pass: ",usuario.pass)
										this.setState({
												islogin:false,
										});
										alert("Nombre de usuario ya en uso")
								})
							
							console.log(axios.response)
				
			}
			// else{
			// 	console.log("inslogin:", this.state.islogin)
			// 	console.log("userdata", this.state.userdata)
			// 	this.props.getUserData(this.state.userdata)
			// 	window.location = "/main"
			// }
	
		}
	
		handleChange = (event) => {
			const { userdata } = this.state;
			userdata[event.target.name] = event.target.value;
			this.setState({ userdata });
	};
	
	  

  render() {
	if (this.state.islogin) {
		console.log("inslogin:", this.state.islogin)
		console.log("userdata", this.state.userdata.data)
		//storage.
		localStorage.clear()
		this.props.userDataLoaded({UserData:this.state.userdata.data})
		storage.setItem("Nombre",this.state.userdata.data["name"])
		storage.setItem("Nivel",1)
		storage.setItem("Experiencia",0)
		console.log("storage login",storage,localStorage)
		this.setState({islogin:false})
		window.location = "/main"
}
    return (
	<Container>	
		<Row>	
			<div className="panel-body">
				<form onSubmit={this.handleSubmit}>
				{/* <div className="col-md-6 col-sm-6 col-xs-12"> */}
				<Col>
					<input type="text" name="name" id="name" className="form-control" placeholder="Usuario" required="required" autoFocus="" onChange={this.handleChange}/>
				</Col>
				{/* <div className="col-md-6 col-sm-6 col-xs-12"> */}
				<Col>
					<label for="inputPassword" className="sr-only">Password</label>
					<input type="password" name="pass" id="pass" className="form-control" placeholder="Password" required="required" onChange={this.handleChange}/>		
				</Col>
				{/* <div className="col-md-6 col-sm-6 col-xs-12"> */}
				<Col>
				    {/*<Link to="/main">*/}
						<button className="btn btn-success form-control" id="registerButton" type="submit">Registrar</button>
					{/*</Link>*/}
				</Col>
				</form>
			</div>
		</Row>
	</Container>
	
    );
  }
}

export default connect(null, mapDispatchToProps)(Register);
