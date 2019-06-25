import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProgressBar from 'react-bootstrap/Container';
import './../css/app.css';
import './../css/bootstrap.min.css';

class Header extends Component {
  constructor(props){
    super(props)
    this.state={
      user:{
        userName:null,
        level:null,
        experience:null,
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps------> son iguales??",this.props === nextProps)
    if (this.props !== nextProps) {
      console.log("componentWillReceiveProps------> no son iguales, NextProps: ",nextProps, "props->",this.props)
      this.setState({ 
        user: nextProps.UserData, 
      })
      console.log("componentWillReceiveProps------>editable?",this.state.user)  
      }
  }

  render() {
    const {user}=this.state;
    // console.log(user)
    const now = user.experience
    const progressInstance = <ProgressBar animated now={now} label={`${now}%`} />;

    return (

      <Jumbotron fluid className="jumbotron">
    {/*  <div className="jumbotron bg"> */}
		  <Container>
			  <h1 className="display-4">Kanji Learn</h1>
			  <p className="lead">Fácil y Rápido</p>
        {user.userName!==null && <p className="userData" id="usuario" >Usuario: {user.userName}</p>}
	      {user.level!==null &&<p className="userData" id="nivel" >Nivel: {user.level}</p>}
        {user.experience!==null &&<p>{progressInstance}</p>}
        {user.userName!==null &&<i class="fas fa-sign-out-alt"></i>}
	  	</Container>
      </Jumbotron>
	
    );
  }
}

export default Header;
