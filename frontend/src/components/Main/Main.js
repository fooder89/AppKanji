import React, { Component } from 'react';
import './../css/app.css';
import './../css/bootstrap.min.css';
import {connect} from "react-redux"
import uuid from "uuid"
import { Link } from 'react-router-dom';
import storage from 'redux-persist/lib/storage'

// const axios = require('axios');

// const mapStateToProps = state =>{
//    return {UserData: state.UserData}
//  }

console.log(localStorage, storage)

class Main extends Component {
	constructor(props){
	super(props)
	this.state={
		userName:localStorage.getItem("Nombre"),
		level:localStorage.getItem("Nivel"),
		experience: localStorage.getItem("Experiencia")
		}
	}
	
  render() {
	  console.log(this.props)
		console.log(localStorage.getItem("Nombre"), storage,localStorage.getItem("Nivel") >= 2)

		console.log("Main props userData",this.props.UserData)

		let {userName,level,experience}=this.state
	  if (this.props.UserData==={}) {
         return <div></div>
       }
    return (
<div>
   <div className="jumbotron bg">
		<div className="container">
			<h1 className="display-4">Kanji Learn</h1>
			<p className="lead">Fácil y Rápido</p>
		</div>
	</div>
	  
	{/* {console.log(this.props.UserData)} */}
	<p id="usuario" >Usuario: {userName}</p>
	<p id="nivel" >Nivel: {level}</p>
	
	<div className="container">	
		<div className="row">	
			<div className="row">	
				<div className="col-md-6 col-sm-6 col-xs-12">
					<Link to="/test" type="button" className="btn btn-success" id="test1"> Tests Kanji 1 Traza </Link>
				</div>
				<div className="col-md-6 col-sm-6 col-xs-12">
					{console.log("mostrar link boton",level>=2)}
				{localStorage.getItem("Nivel") >= 2 ? 
						<Link to="/test" type="button" className="btn btn-primary" id="test2">Tests Kanji 2 Trazas</Link>
					: <a type="button" className="btn disabled" id="test2">
						Tests Kanji 2 Trazas
					</a>} 
				</div>
				<div className="col-md-6 col-sm-6 col-xs-12">
				{localStorage.getItem("Nivel") >= 3 ? 
						<Link to="/test" type="button" className="btn btn-primary" id="test3">Tests Kanji 3 Trazas</Link>
					: <a type="button" className="btn disabled" id="test3">
						Tests Kanji 3 Trazas
					</a>} 
				</div>
				<div className="col-md-6 col-sm-6 col-xs-12">
				{localStorage.getItem("Nivel") >= 4 ? 
						<Link to="/test" type="button" className="btn btn-primary" id="test4">Tests Kanji 4 Trazas</Link>
					: <a type="button" className="btn disabled" id="test4">
						Tests Kanji 4 Trazas
					</a>} 
				</div>
			</div>
		</div>
	</div>
  
  </div>
	
    );
  }
}

export default /*connect(mapStateToProps)(*/Main/*)*/;