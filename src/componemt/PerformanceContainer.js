import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Classnames from 'classnames'
export default class PerformaneContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    
  }

  onMouseEnter(target,isShow){
    this.props.onMouseEnter(target,isShow);
  }
  onMouseLeave(target,isShow){
    this.props.onMouseEnter(target,isShow);
  }
  render(){
    const containerClass=Classnames(
      'performance_container',
      'from_small',
      {
        'horizontal':this.props.autoPlay,
        'even':this.props.data.length%2==0
      }
    )
    return(
      // <ul className={this.props.autoPlay?'performance_container horizontal from_small':'performance_container from_small'}
      <ul className={containerClass}
        style={{
          gridTemplateColumns:'repeat('+this.props.data.length+', 1fr)'
        }}
      >
        {this.props.data.map((target,index) => {
          return (
            <Performance
              data={target}
              isExpand={this.props.isExpand}
              onMouseEnter={(performanceName,isShow)=>this.onMouseEnter(performanceName,isShow)}
              onMouseLeave={(performanceName,isShow)=>this.onMouseLeave(performanceName,isShow)}
              currentHoverTarget={this.props.currentHoverTarget}
              autoPlay={this.props.autoPlay}
              key={index}
            />
          )
        })}
      </ul>
    )
  }
}

class Performance extends Component{
  constructor(props){
    super(props)
    this.state = {
      hover:false
    }
  }
  onMouseAction(value){
    if(this.props.autoPlay){
      return;
    }
    this.props.onMouseEnter(this.props.data.name,value);
    this.setState({
      'hover':value
    })
  }

  render(){
    const targetLink = this.props.data.path;
    const targetTitle = this.props.data.title;
    const targetSubTitle = this.props.data.subTitle;
    const isShow=this.props.data.name==this.props.currentHoverTarget?true:false;
    return(
      <li className={this.props.isExpand?'expand':''}>
        <div className={this.state.hover?'moveBox hover':'moveBox'}>
          <div className='case'>
            <Link to={targetLink}>
            <figure className={isShow?'hover':''}
              onMouseEnter={()=>this.onMouseAction(true)}
              onMouseLeave={()=>this.onMouseAction(false)}
              style={{
                borderColor:(this.props.isExpand||isShow)?this.props.data.color:'#000'
              }}>
                <p>{targetTitle}
                <br/>
                  <span>{targetSubTitle}</span>
                </p>
              </figure>
            </Link>
          </div>
        </div>
      </li>
    )   
  }
}