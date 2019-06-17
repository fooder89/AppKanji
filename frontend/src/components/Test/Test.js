import React, { Component } from 'react';
import './../css/app.css';
import './../css/bootstrap.min.css';
import Header from './../Header/Header';
// import {connect} from "react-redux"
// import { getData } from "../../redux/actions/index"
// import { k1 } from "../../redux/constants/actionTypes"
import axios from "axios";
// import img from "../img"
// import uuid from "uuid"
// import { Link } from 'react-router-dom';

// var jsonQ=require("jsonq");

//  const mapStateToProps = state =>{
//    return {k1: state.k1}
//  }
//  const mapDispatchToProps = (dispatch) => {
// 	return {
// 	  getData: () => dispatch(getData(k1)),
// 	}
// }


  
export default class Test extends Component {
  constructor(props){
    super(props)
	this.state={
		userName:localStorage.getItem("Nombre"),
		level:localStorage.getItem("Nivel"),
		experience: localStorage.getItem("Experiencia"),
		kanjiInfo:[],
		haveData:false
		}
 }

 componentDidMount(){

	axios({
	method: 'get',
	url: 'http://localhost:8001/api/kanji/'+this.state.level,
	//params: this.state.level
	
	})
	.then(res => {
			// console.log(res);
			// console.log("res.data " ,res.data.data);
		//	this.props.getUserData(res.data)
			this.setState({
				haveData: true,
				kanjiInfo: res.data.data
			});
			// console.log("res",res,"kanjiinfo: ",this.state.kanjiInfo) 
			//window.location = "/main"
			
	})

	.catch(err => {
			// console.log("ERR",err,"kanjiinfo: ",this.state.kanjiInfo)
			this.setState({
				haveData:false,
			});
	})

	// console.log(axios.response)
 }
 comprobarResp= esCorrecta => e =>{
	console.log(esCorrecta,e.target.id)
	if(esCorrecta==="Correcta"){
		document.querySelector(`#${e.target.id}`).classList.replace("btn-primary","btn-success")
		this.setState((state) => ({
			experience: state.experience+3
		}))
	}
	else{
		document.querySelector(`#${e.target.id}`).classList.replace("btn-primary","btn-danger")
		if(this.state.experience>0){
			this.setState((state) => ({
				experience: state.experience-1
			}))
		}
	}
 }

 componentWillUpdate(nextProps, nextState){
	return   this.state.experience !== nextState.experience;
 }

 componentDidUpdate(){
	 console.log("Socorro")
 }
 aleatorio(totalKanjis){
	var numero_total=totalKanjis.length;
	var numero=Math.floor(Math.random()*numero_total);
	// console.log(totalKanjis[numero]);
	return numero
 }

 generarResp(kanjiInfoAux,idRespCorrecta){
	if(kanjiInfoAux.length>4){
		var idAux =""
		var meaning=""
		var respuestas=[]
		var id1="",id2="",id3="",id4="",esCorrecta=false
		var respCorrecta =""
		var respFinal=[]

		respCorrecta=kanjiInfoAux[idRespCorrecta].meaning
		console.log("Antes de borrar",kanjiInfoAux,"idRespCorrecta",idRespCorrecta)
		kanjiInfoAux.splice(idRespCorrecta,1) //sacamos del array la respuesta correcta
		 console.log("respcorrecta",respCorrecta,"kanjiInfo",kanjiInfoAux)
		for(var i=0;i<3&&idAux<kanjiInfoAux.length;i++){
			idAux=this.aleatorio(kanjiInfoAux)
			meaning = kanjiInfoAux[idAux].meaning
			respuestas.push([kanjiInfoAux[idAux].meaning,"Incorrecta"])
			kanjiInfoAux.splice(idAux,1)
		}
		respuestas.push([respCorrecta,"Correcta"])

		console.log("respuestas",respuestas)

		id1=this.aleatorio(respuestas)
		respFinal.push(respuestas[id1])
		respuestas.splice(id1,1)
		console.log("respuestaFinal1",respFinal)

		id2=this.aleatorio(respuestas)
		respFinal.push(respuestas[id2])
		respuestas.splice(id2,1)
		console.log("respuestaFinal2",respFinal)

		id3=this.aleatorio(respuestas)
		respFinal.push(respuestas[id3])
		respuestas.splice(id3,1)
		console.log("respuestaFinal3",respFinal)

		// id4=this.aleatorio(respuestas)
		console.log("respuestas antes de la ultoma",respuestas)
		respFinal.push(respuestas[0])
		console.log("respuestaFinal4",respFinal)


		// respFinal.push([respuestas[id1],respuestas[id2],respuestas[id3],respuestas[id4]])
		// console.log("resp final",respFinal,respFinal[0][0],respFinal[1][0],respFinal[2][0],respFinal[3][0])
		// respFinal.map((item,id) =>{
		// 	console.log("item",item,"id",id)
		// 	return(
		// 		<a type="button" className="btn btn-default" onClick={this.comprobarResp(item[1])}>
		// 			{item[0]}
		// 		</a>
		// 	)
		//  })
		return respFinal
	 }
  }
 
  
  render() {

	   let {userName,level,experience,kanjiInfo}=this.state
	   let respuestas=[]
	//    console.log("props k1",this.props,this.props.k1)
	   if (kanjiInfo.length<1) {
         return <div></div>
	   }

	   else{
		   var kanjiInfoAux = ""
		   kanjiInfoAux=kanjiInfo
		   var idRespCorrecta = ""
		   

		   idRespCorrecta=this.aleatorio(kanjiInfoAux)
		   
		   var rutaImg =""
		   
		   rutaImg= kanjiInfoAux[idRespCorrecta].decimal+".png"

		//    respuestas=
		//    console.log(this.generarResp(kanjiInfoAux,idRespCorrecta))
		   //console.log("Respuestas FINAL",respuestas)
	
    return(

		kanjiInfo.length>0 && (<div>
       <Header /> 
	<p id="usuario" >Usuario: {userName}</p>
	<p id="nivel" >Nivel: {level}</p>

	<div className="container">	
		<div className="row">	
		
			<img src={require(`../img/${rutaImg}`)} className="img-fluid"/>
			{/*<img Kanji/>*/}
			
			<div className="row">	
				<div className="col-md-12 col-sm-12 col-xs-12">
					{this.generarResp(kanjiInfoAux,idRespCorrecta).map((item,id) =>{
						console.log("item",item,"id",id)
						return(
							<a type="button" className="btn btn-primary" id={"respuesta"+id} key={"respuesta"+id} onClick={this.comprobarResp(item[1])}>
								{item[0]}
							</a>
						)
					})}
					{/* {id1=this.aleatorio(respuestas)} 
					 <a type="button" className="btn btn-default" id="resp1" href="">
					 {respuestas[id1][0]} 
					{this.generarResp(kanjiInfoAux,idRespCorrecta)}
					 {console.log(id1,respuestas[id1],respuestas[id1][0])} 
					</a>
				</div>
				<div className="col-md-12 col-sm-12 col-xs-12">
					 {respuestas.splice(id1,1)} 
			* {id2=this.aleatorio(respuestas)} 
					<a type="button" className="btn btn-default" id="resp2">
					{/* {respuestas[id2][0]} 
					{/* {console.log(id2,respuestas[id2],respuestas[id2][0])} 
					{this.generarResp(kanjiInfoAux,idRespCorrecta)[1]}
					</a>
				</div>
				<div className="col-md-12 col-sm-12 col-xs-12">
				 {respuestas.splice(id2,1)} 
				{id3=this.aleatorio(respuestas)} 
					<a type="button" className="btn btn-default" id="resp3">
					{respuestas[id3][0]} 
					{console.log(id3,respuestas[id3],respuestas[id3][0])} 
					{this.generarResp(kanjiInfoAux,idRespCorrecta)[2]}
					</a>
				</div>
				<div className="col-md-12 col-sm-12 col-xs-12">
				 {respuestas.splice(id3,1)} 
				{id4=this.aleatorio(respuestas)} 
					<a type="button" className="btn btn-default" id="resp4">
					{respuestas[id4][0]} 
					{console.log(id4,respuestas[id4],respuestas[id4][0])} 
					{this.generarResp(kanjiInfoAux,idRespCorrecta)[3]}
					</a> */}
				</div>
			</div>
		</div>
	</div>
  
  </div>)
		)
  }
}

}
//   export default /*connect(mapStateToProps,mapDispatchToProps)(*/Test/*)*/;
