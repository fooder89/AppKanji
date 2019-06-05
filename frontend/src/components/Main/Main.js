import React, { Component } from 'react';
import './../css/app.css';
import './../css/bootstrap.min.css';
import {connect} from "react-redux"
import uuid from "uuid"
import { Link } from 'react-router-dom';
import localStorag from 'redux-persist/lib/storage'

/* const mapStateToProps = state =>{
   return {DS: state.DS}
 }*/
console.log(localStorage, localStorag)

class Main extends Component {
	constructor(props){
    super(props)
	}
	
  render() {
	  console.log(this.props)
	  console.log(localStorage, localStorag)
	   /*if (this.props.DS==={}) {
         return <div></div>
       }*/
    return (
<div>
   <div class="jumbotron bg">
		<div class="container">
			<h1 class="display-4">Kanji Learn</h1>
			<p class="lead">Fácil y Rápido</p>
		</div>
	</div>
	  
	
	<p id="usuario" >Usuario: </p>
	<p id="nivel" >Nivel: </p>
	
	<div class="container">	
		<div class="row">	
			<div class="row">	
				<div class="col-md-6 col-sm-6 col-xs-12">
					<a type="button" class="btn btn-success" id="test1" href="test.html">
						<Link to="/test"> Tests Kanji 1 Traza </Link>
					</a>
				</div>
				<div class="col-md-6 col-sm-6 col-xs-12">
					<a type="button" class="btn btn-primary" id="test2" href="test.html">
						<Link to="/test">Tests Kanji 2 Trazas</Link>
					</a>
				</div>
				<div class="col-md-6 col-sm-6 col-xs-12">
					<a type="button" class="btn btn-success" id="test3" href="test.html">
						<Link to="/test">Tests Kanji 3 Trazas</Link>
					</a>
				</div>
				<div class="col-md-6 col-sm-6 col-xs-12">
					<a type="button" class="btn btn-primary" id="test4" href="test.html">
						<Link to="/test">Tests Kanji 4 Trazas</Link>
					</a>
				</div>
			</div>
		</div>
	</div>
  
  </div>
	
    );
  }
}

export default Main;