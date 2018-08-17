import React,{ Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
const isDeploy = true;
const addPathPrerix='/portfolio';
const rootPath = isDeploy?addPathPrerix+'/':'';
export default class Header extends Component{
  constructor(props){
    super(props);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.showHeader=false;
    this.state = {
      hide:this.props.hide,
      show:false
    }
  }
  scrollHandler(){
    const result = window.scrollY>160?true:false;
    if(result!=this.showHeader){
      this.showHeader = result;
      this.forceUpdate();
    }
  }

  changeHeaderState(result){
    this.props.changeHeaderState(result)
  }


  componentDidMount(){
    window.addEventListener('scroll',this.scrollHandler,true);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.scrollHandler);
  }
  onClick(){

  }
  render(){
    const headerClass = classnames(
      'root_header',
      {
        'header_show':this.showHeader
      }
    )
    return(
      <div className={headerClass}>
        <ul className='header_link_container'>
        <PerformanceLink
          path={rootPath}
          title='Top'
          hide={this.props.hide}
        />
        {this.props.data.map((target,index) => {
          return(
            <PerformanceLink
              path={target.path}
              title={target.title}
              hide={this.props.hide}
              color={target.color}
              key={index}
            />
          )
        })}
        </ul>
      </div>
    )
  }
}

class PerformanceLink extends Component{
  render(){
    const headerLink = classnames(
      'header_link',
      {
        'selected':this.props.hide==this.props.path
      }
    )
    return(
      <li className={headerLink}
        style={{
        borderBottomColor:this.props.hide==this.props.path?this.props.color:'transparent',
        color:this.props.hide==this.props.path?this.props.color:''
      }}>
        <Link to={this.props.path}>
          {this.props.title}
          <span className='borderSpan'
          style={{
            backgroundColor:this.props.hide==this.props.path?this.props.color:'transparnt'
          }}>
          </span>
        </Link>
      </li> 
    )
  }
}