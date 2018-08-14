import React, { Component } from 'react';
import classnames from "classnames";
import { BackgroundScreen } from "../componemt/BackgroundScreen";
import PerformanceContainer from "../componemt/PerformanceContainer";
import $ from "jquery";

let visualizeTarget;

export class MainVisual extends Component {
  constructor(props) {
      super(props);
      this.nameAnmation = this.nameAnmation.bind(this);
      this.expandAnimation = this.expandAnimation.bind(this);
      this.playOnClick = this.playOnClick.bind(this)
      this.lastSelectedPlayValue = false;
      this.performanceMouseEventHander = this.performanceMouseEventHander.bind(this)
      this.performances = ['ttf',
                          'seto',
                          'shimogamo',
                          'chrono',
                          'dashboard']
      this.state = {
        'name':'',
        'isExpand':true,
        'autoPlay':false,
        'horizontal':false,
        'ttf':false,
        'seto':false,
        'shimogamo':false,
        'chrono':false,
        'dashboard':false,
        'photos':[],
        'isShow':false,
        'initialized':false,
        'currentSlide':[]
      };
  };

  componentDidMount(done) {
    $.ajax({
      url:'performance.json',
      type:'GET',
      dataType:'json',
      data:"",
      timeout:5000
    })
    .then((...args)=>{
      const [res,textStatus,jqXHR] = args;  
      visualizeTarget = res;
      this.setState({'name':res.name});
      this.nameAnmation()
    })
    .fail((...args)=>{
      const [res,textStatus,jqXHR] = args;
      console.log('user data not available >> ' + jqXHR.status);
    })
  }

  changeSlide(targetName,isShow){
    
    switch (targetName) {
      case 'ttf':
        console.log(targetName);
        this.setState({'currentSlide':isShow?this.props.ttfSlides:[]});
        this.setState({'ttf':isShow});
        break;
      case 'seto':
        console.log(targetName);
        this.setState({'currentSlide':isShow?this.props.setoSlides:[]});
        this.setState({'seto':isShow})
        break;
      case 'shimogamo':
        console.log(targetName);
        this.setState({'currentSlide':isShow?this.props.shimogamoSlides:[]});
        this.setState({'shimogamo':isShow})
        break;
      case 'chrono':
        console.log(targetName);
        this.setState({'currentSlide':isShow?this.props.chronoSlides:[]});
        this.setState({'chrono':isShow})
        break;
      case 'dashboard':
        console.log(targetName);
        this.setState({'currentSlide':isShow?this.props.dashboardSlides:[]});
        this.setState({'dashboard':isShow})
        break;
      default:
        break;
    }
    this.currentSlide = isShow?targetName:''
  }

  playOnClick(){
    this.setState({"autoPlay":!this.state.autoPlay})
    const nextValue = !this.state.autoPlay
    if(nextValue){
      this.setState({'isExpand':false})
      this.nextPlay()
    }else{
      this.changeSlide(this.currentSlide,false)
      this.expandAnimation()
    }
  }

  performanceMouseEventHander(target,value){
    this.setState({'horizontal':value});
    this.expandAnimation()
    this.changeSlide(target,value)
  }

  nextPlay(){
    if(!this.currentSlide||this.currentSlide==''){
      this.currentSlide='dashboard'
    }
    let nextValue = ''
    const currentValue = this.currentSlide
    this.performances.some((target,index)=>{
      if(target==currentValue){
        if(index==4){
          nextValue=this.performances[0]
        }else{
          nextValue=this.performances[index+1]
        }
        return true
      }
    })
    this.changeSlide(this.currentSlide,false)
    this.changeSlide(nextValue,true)
    this.currentSlide=nextValue
    // setTimeout((()=>{
    //   this.nextPlay()
    // }),2000);
  }

  expandAnimation(){
    this.setState({"isExpand":!this.state.isExpand});
  }
  
  nameAnmation(){
    const portfolio = document.getElementById('portfolio');
    portfolio.classList.remove('from_bottom');
    let SPY = function(t) {
      function e(a, d, b,t6) {
        function gogo(targetK,targetT){
          targetK.animationComplete = !0;
          targetT.setState({'initialized':true});
        }
        var c, f, g, h;
        // b == a.length ? k.animationComplete = !0 : (g = d.innerHTML, h = Math.floor(21 * Math.random() + 5), c = 32 == a[b] ? 32 : a[b] - h, f = setInterval(function() {
          b == a.length ? gogo(k,t6) : (g = d.innerHTML, h = Math.floor(21 * Math.random() + 5), c = 32 == a[b] ? 32 : a[b] - h, f = setInterval(function() {
          d.innerHTML = g + String.fromCharCode(c);
          c == a[b] ? (clearInterval(f), c = 32, b++, setTimeout(function() {
            e(a, d, b,t6);
          }, 10)) : c++;
        }, 2));
      }
      let k = {};
      return k = {animationComplete:!1, text:function(a,t3) {
        this.animationComplete = !1;
        a = document.getElementById(a);
        for (var d = a.innerHTML, b = [], c = 0;c < d.length;c++) {
          b.push(d.charCodeAt(c));
        }
        a.innerHTML = "";
        e(b, a, 0,t3);
      }};
    }();
    
    SPY.text('targetName',this)
    setTimeout(() => {
      portfolio.classList.add('from_bottom');
    }, 100);
  }

  componentDidEnter() {
  }

  render() {
    return (
      // <div className={this.state.ttf?'wrapper ttf_slide':'wrapper'}>
      <div className={this.state.initialized?'wrapper initialized':'wrapper'}>
        <BackgroundScreen
        autoPlay={this.state.autoPlay}
        nextPlay={()=>this.nextPlay()}
        photos={this.state.currentSlide}
        />
        <section className="sign">
          <h1 id='targetName' className='userName' onClick={this.nameAnmation}>{this.state.name}</h1>
          <p id='portfolio' className='portfolio_title'>Portfolio</p>
          <button className={this.state.isExpand?'expand_button selected':'expand_button'} onClick={this.expandAnimation}>
          </button>
          <button className={this.state.autoPlay?'play_button stop':'play_button'} onClick={this.playOnClick}>
          </button>
        </section>
        <PerformanceContainer
          autoPlay={this.state.autoPlay}
          isExpand={this.state.isExpand}
          shimogamo={this.state.shimogamo}
          shimogamoOnMouseEnter={()=>this.performanceMouseEventHander('shimogamo',true)}
          shimogamoOnMouseLeave={()=>this.performanceMouseEventHander('shimogamo',false)}
          ttf={this.state.ttf}
          ttfOnMouseEnter={()=>this.performanceMouseEventHander('ttf',true)}
          ttfOnMouseLeave={()=>this.performanceMouseEventHander('ttf',false)}
          seto={this.state.seto}
          setoOnMouseEnter={()=>this.performanceMouseEventHander('seto',true)}
          setoOnMouseLeave={()=>this.performanceMouseEventHander('seto',false)}
          chrono={this.state.chrono}
          chronoOnMouseEnter={()=>this.performanceMouseEventHander('chrono',true)}
          chronoOnMouseLeave={()=>this.performanceMouseEventHander('chrono',false)}
          dashboard={this.state.dashboard}
          dashboardOnMouseEnter={()=>this.performanceMouseEventHander('dashboard',true)}
          dashboardOnMouseLeave={()=>this.performanceMouseEventHander('dashboard',false)}
        />
        {/* <ul className={this.state.autoPlay?'performance_container horizontal from_small':'performance_container from_small'}>
          <li className={this.state.isExpand?'expand':''}>
            <div className={this.state.shimogamo?'moveBox hover':'moveBox'}>
              <div className='case'>
                <Link to="/shimogamodeli">
                <figure className={this.state.shimogamo?'shimogamo_figure hover':'shimogamo_figure'}
                  onMouseEnter={()=>this.performanceMouseEventHander('shimogamo',true)}
                  onMouseLeave={()=>this.performanceMouseEventHander('shimogamo',false)}>
                    <p>設計・コーディング
                    <br/>
                      <span>ホームページ作成</span>
                    </p>
                  </figure>
                </Link>
              </div>
            </div>
          </li>
          <li className={this.state.isExpand?'expand':''}>
              <div className={this.state.ttf?'moveBox hover':'moveBox'}>
                <div className='case'>
                  <Link to="/TTFConverter">
                    <figure className={this.state.ttf?'ttf_figure hover':'ttf_figure'}
                    onMouseEnter={()=>this.performanceMouseEventHander('ttf',true)}
                    onMouseLeave={()=>this.performanceMouseEventHander('ttf',false)}>
                      <p>Webフォント生成
                      <br/>
                        <span>ttf→Web用ファイル一式</span>
                      </p>
                    </figure>
                  </Link>
                </div>
              </div>
          </li>
          <li className={this.state.isExpand?'expand':''}>
            <div className='moveBox'>
              <div className='case'>
                <Link to="/setogreenEstate">
                <figure className={this.state.seto?'seto_figure hover':'seto_figure'}
                  onMouseEnter={()=>this.performanceMouseEventHander('seto',true)}
                  onMouseLeave={()=>this.performanceMouseEventHander('seto',false)}>
                    <p>物件検索エンジン
                    <br/>
                      <span>不動産ホームページ</span>
                    </p>
                  </figure>
                </Link>
              </div>
            </div>
          </li>
          <li className={this.state.isExpand?'expand':''}>
            <div className='moveBox'>
              <div className='case'>
                <Link to="/chronograph">
                <figure className={this.state.chrono?'chrono_figure hover':'chrono_figure'}
                  onMouseEnter={()=>this.performanceMouseEventHander('chrono',true)}
                  onMouseLeave={()=>this.performanceMouseEventHander('chrono',false)}>
                    <p>3Dアニメーション<br/>
                      <span>年表を3Dで
                      </span>
                    </p>
                  </figure>
                </Link>
              </div>
            </div>
          </li>
          <li className={this.state.isExpand?'expand':''}>
            <div className={this.state.dashboard?'moveBox hover':'moveBox'}>
              <div className='case'>
                <Link to="/dashboard">
                <figure className={this.state.dashboard?'dashboard_figure hover':'dashboard_figure'}
                    onMouseEnter={()=>this.performanceMouseEventHander('dashboard',true)}
                    onMouseLeave={()=>this.performanceMouseEventHander('dashboard',false)}>
                    <p>集計データの可視化
                    <br/>
                      <span>分析用ダッシュボード</span>
                    </p>
                  </figure>
                </Link>
              </div>
            </div>
          </li>
        </ul> */}
      </div>
    );
  }
}
