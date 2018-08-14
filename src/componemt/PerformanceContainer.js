import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import ClassNames from 'classnames';
// function mapStateToProps(state,props){
//   const {performanceReducer}=state
// }

export default class PerformaneContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){

  }

  render(){
    return(
      <ul className={this.props.autoPlay?'performance_container horizontal from_small':'performance_container from_small'}>
        <ShimogamoPerformance
          title='設計・コーディング'
          subTitle='ホームページ作成'
          isExpand={this.props.isExpand}
          link="/shimogamodeli"
          shimogamo={this.props.shimogamo}
          shimogamoOnMouseEnter={this.props.shimogamoOnMouseEnter}
          shimogamoOnMouseLeave={this.props.shimogamoOnMouseLeave}
        />
        <TTFPerformance
          title='Webフォント生成'
          subTitle='ttf→Web用ファイル一式'
          isExpand={this.props.isExpand}
          link="/TTFConverter"
          ttf={this.props.ttf}
          ttfOnMouseEnter={this.props.ttfOnMouseEnter}
          ttfOnMouseLeave={this.props.ttfOnMouseLeave}
        />
        <SetoPerformance
          title='物件検索エンジン'
          subTitle='不動産ホームページ'
          isExpand={this.props.isExpand}
          link="/setogreenEstate"
          seto={this.props.seto}
          setoOnMouseEnter={this.props.setoOnMouseEnter}
          setoOnMouseLeave={this.props.setoOnMouseLeave}
        />
        <ChronoPerformance
          title='3Dアニメーション'
          subTitle='年表を3Dで'
          isExpand={this.props.isExpand}
          link="/chronograph"
          chrono={this.props.chrono}
          chronoOnMouseEnter={this.props.chronoOnMouseEnter}
          chronoOnMouseLeave={this.props.chronoOnMouseLeave}
        />
        <DashboardPerformance
          title='集計データの可視化'
          subTitle='分析用ダッシュボード'
          isExpand={this.props.isExpand}
          link="/dashboard"
          dashboard={this.props.dashboard}
          dashboardOnMouseEnter={this.props.dashboardOnMouseEnter}
          dashboardOnMouseLeave={this.props.dashboardOnMouseLeave}
        />
        {/* <li className={this.props.isExpand?'expand':''}>
          <div className={this.props.dashboard?'moveBox hover':'moveBox'}>
            <div className='case'>
              <Link to="/dashboard">
                <figure className={this.props.dashboard?'dashboard_figure hover':'dashboard_figure'}
                  onMouseEnter={this.props.dashboardOnMouseEnter}
                  onMouseLeave={this.props.dashboardOnMouseLeave}>
                  <p>集計データの可視化
                  <br/>
                    <span>分析用ダッシュボード</span>
                  </p>
                </figure>
              </Link>
            </div>
          </div>
        </li> */}
      </ul>
    )
  }
}

class ShimogamoPerformance extends Component{
  render(){
    const targetLink = this.props.link;
    const targetTitle = this.props.title;
    const targetSubTitle = this.props.subTitle;
    return(
      <li className={this.props.isExpand?'expand':''}>
          <div className={this.props.shimogamo?'moveBox hover':'moveBox'}>
          {/* <div className='moveBox'> */}
            <div className='case'>
              <Link to={targetLink}>
              <figure className={this.props.shimogamo?'shimogamo_figure hover':'shimogamo_figure'}
                onMouseEnter={this.props.shimogamoOnMouseEnter}
                onMouseLeave={this.props.shimogamoOnMouseLeave}>
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

class SetoPerformance extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    const targetLink = this.props.link;
    const targetTitle = this.props.title;
    const targetSubTitle = this.props.subTitle;
    return(
      <li className={this.props.isExpand?'expand':''}>
        <div className={this.props.seto?'moveBox hover':'moveBox'}>
        {/* <div className='moveBox'> */}
          <div className='case'>
            <Link to={targetLink}>
            <figure className={this.props.seto?'seto_figure hover':'seto_figure'}
              onMouseEnter={this.props.setoOnMouseEnter}
              onMouseLeave={this.props.setoOnMouseLeave}>
                <p>{targetTitle}}<br/>
                  <span>{targetSubTitle}
                  </span>
                </p>
              </figure>
            </Link>
          </div>
        </div>
      </li>
    )
  }
}

class ChronoPerformance extends Component{
  render(){
    const targetLink = this.props.link;
    const targetTitle = this.props.title;
    const targetSubTitle = this.props.subTitle;
    return(
      <li className={this.props.isExpand?'expand':''}>
          <div className={this.props.chrono?'moveBox hover':'moveBox'}>
          {/* <div className='moveBox'> */}
            <div className='case'>
              <Link to={targetLink}>
              <figure className={this.props.chrono?'chrono_figure hover':'chrono_figure'}
                onMouseEnter={this.props.chronoOnMouseEnter}
                onMouseLeave={this.props.chronoOnMouseLeave}>
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

class TTFPerformance extends Component{
  render(){
    const targetLink = this.props.link;
    const targetTitle = this.props.title;
    const targetSubTitle = this.props.subTitle;
    return(
      <li className={this.props.isExpand?'expand':''}>
        <div className={this.props.ttf?'moveBox hover':'moveBox'}>
        {/* <div className='moveBox'> */}
          <div className='case'>
            <Link to={targetLink}>
            <figure className={this.props.ttf?'ttf_figure hover':'ttf_figure'}
              onMouseEnter={this.props.ttfOnMouseEnter}
              onMouseLeave={this.props.ttfOnMouseLeave}>
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

class DashboardPerformance extends Component{
  render(){
    const targetLink = this.props.link;
    const targetTitle = this.props.title;
    const targetSubTitle = this.props.subTitle;
    return(
      <li className={this.props.isExpand?'expand':''}>
        <div className={this.props.dashboard?'moveBox hover':'moveBox'}>
        {/* <div className='moveBox'> */}
          <div className='case'>
            <Link to={targetLink}>
              <figure className={this.props.dashboard?'dashboard_figure hover':'dashboard_figure'}
                onMouseEnter={this.props.dashboardOnMouseEnter}
                onMouseLeave={this.props.dashboardOnMouseLeave}>
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