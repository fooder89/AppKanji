import React, { Component } from 'react';
import './../css/app.css';
import './../css/bootstrap.min.css';
import Header from './../Header/Header';
import {connect} from "react-redux"
import uuid from "uuid"
import { Link } from 'react-router-dom';

var jsonQ=require("jsonq");

 const mapStateToProps = state =>{
   return {k1: state.k1}
 }
  
class Test extends Component {
  constructor(props){
    super(props)
	{Object.keys(this.props.k1).map((item)=>{
				console.log(this.props.k1,item)
			})}
	}
	/*procesaJSON(){
		Object.keys(this.props.k1).map((item)=>{
			console.log(item)
		})
	}*/
  render() {
	   if (this.props.k1==={}) {
         return <div></div>
       }
    return(

    <div>
			{Object.keys(this.props.k1).map((item)=>{
				console.log(this.props.k1,item)
			})}			
       <Header /> 
	<p>Usuario: </p>
	<p>Nivel:</p>

	<div class="container">	
		<div class="row">	
			
			{/*<img Kanji/>*/}
			
			<div class="row">	
				<div class="col-md-12 col-sm-12 col-xs-12">
					<a type="button" class="btn btn-default" id="resp1" href="">

					</a>
				</div>
				<div class="col-md-12 col-sm-12 col-xs-12">
					<a type="button" class="btn btn-default" id="resp2" href="">
						
					</a>
				</div>
				<div class="col-md-12 col-sm-12 col-xs-12">
					<a type="button" class="btn btn-default" id="resp3" href="">
						
					</a>
				</div>
				<div class="col-md-12 col-sm-12 col-xs-12">
					<a type="button" class="btn btn-default" id="resp4" href="">
						
					</a>
				</div>
			</div>
		</div>
	</div>
  
  </div>
		)
  }
}
  export default connect(mapStateToProps)(Test);
