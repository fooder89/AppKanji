import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { connect } from "react-redux";
// import {getUserData} from './redux/actions/index'
// import { k1, k2 } from './redux/constants/actionTypes';
import Routes from "./Routes";

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUserData: () => dispatch(getUserData())
//   };
// }

class App extends Component {
	// componentDidMount() {
  //   this.props.getData(k1);
  //   this.props.getData(k2)
  // }
  // constructor(props) {
  //       super(props);
	// 	//this.handleClickR = this.handleClickR.bind(this);
	// 	//this.handleClickL = this.handleClickL.bind(this);
  //       this.state = {
  //           isAuthenticated: false
  //       };
  //   }
    // componentDidMount(){
    //   this.props.getUserData();
    // }

	
  
 /* handleClickR = () => {
	<Link><Register /></Link>
  }
  handleClickL = () => {
	<Link><Login /></Link>
  }*/

    // userHasAuthenticated = authenticated => {
    //     this.setState({ isAuthenticated: authenticated });
    // };



    render() {

        // const childProps = {
        //     isAuthenticated: this.state.isAuthenticated,
        //     userHasAuthenticated: this.userHasAuthenticated
        // };
		
    return (
      // <div>
      <Routes /*childProps={childProps}*//>
	// </div>
    );
  }
}

export default /*connect(null,{mapDispatchToProps})(*/App/*)*/;
