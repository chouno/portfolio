import React,{ Component } from "react"; 
import { Link } from "react-router-dom";
export default class Performance extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  onMouseEnter(){
    const performanceName = thi.props.data.name;
    this.props.onMouseEnter(performanceName,true);
  }
  onMouseLeave(){
    const performanceName = thi.props.data.name;
    this.props.onMouseEnter(performanceName,false);
  }
  render(){
    const targetLink = this.props.link;
    const targetTitle = this.props.title;
    const targetSubTitle = this.props.subTitle;
    return(
      <li className={this.props.isExpand?'expand':''}>
        <div className={this.props.ttf?'moveBox hover':'moveBox'}>
          <div className='case'>
            <Link to={targetLink}>
              <figure className={this.props.shimogamo?'shimogamo_figure hover':'shimogamo_figure'}
                onMouseEnter={()=>this.onMouseEnter}
                onMouseLeave={()=>this.onMouseLeave}>
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