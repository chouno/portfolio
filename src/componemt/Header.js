import React,{ Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      hide:this.props.hide
    }
  }
  render(){
    return(
      <div className='root_header'>
        <ul className='header_link_container'>
          <PerformanceLink
            path='/'
            title='Top'
            hide={this.props.hide}
          />
          <PerformanceLink
            path='/shimogamodeli'
            title='設計・コーディング'
            hide={this.props.hide}
          />
          <PerformanceLink
            path='/TTFConverter'
            title='Webフォント生成'
            hide={this.props.hide}
          />
          <PerformanceLink
            path='/setogreenEstate'
            title='物件検索エンジン'
            hide={this.props.hide}
          />
          <PerformanceLink
            path='/chronograph'
            title='3Dアニメーション'
            hide={this.props.hide}
          />
          <PerformanceLink
            path='/dashboard'
            title='集計データの可視化'
            hide={this.props.hide}
          />
        </ul>
      </div>
    )
  }
}

class PerformanceLink extends Component{
  render(){
      // if(this.props.path==this.props.hide){
      //   return null;
      // }else{
        const headerLink = classnames(
          'header_link',
          {
            'selected':this.props.hide==this.props.path
          }
        )
        return(
          <li className={headerLink}>
            <Link to={this.props.path}>{this.props.title}</Link>
          </li> 
        )
      // }
  }
}