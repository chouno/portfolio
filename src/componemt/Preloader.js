import React , { Component } from "react";


export default class Preloader extends Component{
  render(){
    return(
      <img src={this.props.path} className="preloader" />
    )
  }
}