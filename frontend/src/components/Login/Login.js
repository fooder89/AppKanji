import React, { Component } from 'react';
import './../css/app.css';
import './../css/bootstrap.min.css';
//import { Link } from 'react-router-dom';
import axios from "axios";
import { connect } from "react-redux";
import { userDataLoaded } from "../../redux/actions/index"
import storage from 'redux-persist/lib/storage'
//import storage from 'redux-persist/lib/storage'

const mapDispatchToProps = (dispatch) => {
  return {
    userDataLoaded: (obj) => dispatch(userDataLoaded(obj)),
  };
}

class Login extends Component {
	
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
							url: "http://localhost:8001/api/loguser",
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
			storage.setItem("Nombre",this.state.userdata.data["nombre"])
			storage.setItem("Nivel",this.state.userdata.data["nivel"])
			storage.setItem("Experiencia",this.state.userdata.data["experiencia"])
			console.log("storage login",storage,localStorage)
			this.setState({islogin:false})
			window.location = "/main"
	}


    return (

    <div className="container">	
		<div className="row">	
			<div className="panel-body">
				<form onSubmit={this.handleSubmit}>
				<div className="col-md-6 col-sm-6 col-xs-12">
					<input type="text" name="name"  className="form-control" placeholder="Usuario" required="required" autoFocus="" onChange={this.handleChange}/>
				</div>
				<div className="col-md-6 col-sm-6 col-xs-12">
					<label for="inputPassword" className="sr-only">Password</label>
					<input type="password" name="pass" className="form-control" placeholder="Password" required="required" onChange={this.handleChange} />		
				</div>
				<div className="col-md-6 col-sm-6 col-xs-12">
					{/*<Link to="/main">*/}
					<button className="btn btn-primary form-control" type="submit">Entrar</button>
					{/*</Link>*/}
				</div>
				</form>
			</div>
		</div>
	</div>
	
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
