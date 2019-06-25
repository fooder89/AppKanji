import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Header from './../Header/Header';
import './../css/app.css';
import './../css/bootstrap.min.css';
import {connect} from "react-redux"
// import uuid from "uuid"
import { Link } from 'react-router-dom';
import storage from 'redux-persist/lib/storage'
import Col from 'react-bootstrap/Col';

// const axios = require('axios');

const mapStateToProps = state =>{
   return {UserData: state.UserData}
 }

console.log(localStorage, storage)

class Main extends Component {
	constructor(props){
	super(props)
	this.state={
		user:null
		}
	}

	componentDidMount() {
		console.log("componentDidMount", this.props)
		if (this.props.UserData)
		  this.setState({
			...this.state,
			user: this.props.UserData,
			
		  })
	  }

	componentWillReceiveProps(nextProps){
		console.log("componentWillReceiveProps",this.props,nextProps,this.state.user)
		if(this.props!==nextProps){
			this.setState({
				user:nextProps.UserData
			})
		}
		// else{
		// 	this.setState({
		// 		user:this.props.UserData
		// 	})
		// }
	}
	
  render() {
	  console.log("props",this.props)
		console.log(localStorage.getItem("Nombre"), storage,localStorage.getItem("Nivel") >= 2)

		console.log("Main props userData",this.props.UserData,"array",Array(this.props.UserData).length,"state",this.state.user)

		// let {userName,level,experience}=this.state.user
	  if (Array(this.props.UserData).length===1) {
		  console.log("IF")
         return <div></div>
	   }
	   else{
		   console.log("ELSE")
    return (
		<div>
   {/* <div className="jumbotron bg">
		<Container>
			<h1 className="display-4">Kanji Learn</h1>
			<p className="lead">Fácil y Rápido</p>
		</Container>
	</div>
	  
	{console.log(this.props.UserData)} 
	<p id="usuario" >Usuario: {userName}</p>
	<p id="nivel" >Nivel: {level}</p> */}
	<Header user={this.props.UserData} />
	
	<Container>	
		<Row>	
			<Row>	
				{/* <div className="col-md-6 col-sm-6 col-xs-12"> */}
				<Col>
					<Link to="/test" type="button" className="btn btn-primary" id="test1"> Tests Kanji 1 Traza </Link>
				</Col>
				{/* <div className="col-md-6 col-sm-6 col-xs-12"> */}
				<Col>
					{/* {console.log("mostrar link boton",level>=2)} */}
				{localStorage.getItem("Nivel") >= 2 ? 
						<Link to="/test" type="button" className="btn btn-primary" id="test2">Tests Kanji 2 Trazas</Link>
					: <a type="button" className="btn disabled" id="test2">
						Tests Kanji 2 Trazas
					</a>} 
				</Col>
				{/* <div className="col-md-6 col-sm-6 col-xs-12"> */}
				<Col>
				{localStorage.getItem("Nivel") >= 3 ? 
						<Link to="/test" type="button" className="btn btn-primary" id="test3">Tests Kanji 3 Trazas</Link>
					: <a type="button" className="btn disabled" id="test3">
						Tests Kanji 3 Trazas
					</a>} 
				</Col>
				{/* <div className="col-md-6 col-sm-6 col-xs-12"> */}
				<Col>
				{localStorage.getItem("Nivel") >= 4 ? 
						<Link to="/test" type="button" className="btn btn-primary" id="test4">Tests Kanji 4 Trazas</Link>
					: <a type="button" className="btn disabled" id="test4">
						Tests Kanji 4 Trazas
					</a>} 
				</Col>
			</Row>
		</Row>
	</Container>
  
  </div>
	
	);
}
  }
}

export default connect(mapStateToProps)(Main);