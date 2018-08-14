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
    // $.ajax({
    //   url:'performance.json',
    //   type:'GET',
    //   dataType:'json',
    //   data:"",
    //   timeout:5000
    // })
    // .then((...args)=>{
    //   const [res,textStatus,jqXHR] = args;  
    //   visualizeTarget = res;
    //   this.setState({'name':res.name});
    //   this.nameAnmation()
    // })
    // .fail((...args)=>{
    //   const [res,textStatus,jqXHR] = args;
    //   console.log('user data not available >> ' + jqXHR.status);
    // })
    this.nameAnmation();
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
      this.nextPlay();
    }else{
      this.changeSlide(this.currentSlide,false)
      this.expandAnimation();
    }
  }

  performanceMouseEventHander(target,value){
    this.setState({'horizontal':value});
    this.expandAnimation();
    this.changeSlide(target,value);
  }

  nextPlay(){
    if(!this.currentSlide||this.currentSlide==''){
      this.currentSlide='dashboard';
    }
    let nextValue = ''
    const currentValue = this.currentSlide
    this.performances.some((target,index)=>{
      if(target==currentValue){
        if(index==4){
          nextValue=this.performances[0];
        }else{
          nextValue=this.performances[index+1];
        }
        return true;
      }
    })
    this.changeSlide(this.currentSlide,false);
    this.changeSlide(nextValue,true);
    this.currentSlide=nextValue;
  }

  expandAnimation(){
    this.setState({"isExpand":!this.state.isExpand});
  }
  
  nameAnmation(){
    const portfolio = document.getElementById('portfolio');
    portfolio.classList.remove('from_bottom');
    let SPY = function(t) {
      function e(a, d, b,t6) {
        function complateProccess(targetK,targetT){
          targetK.animationComplete = !0;
          // targetT.setState({'initialized':true});
          targetT();
        }
        var c, f, g, h;
          b == a.length ? complateProccess(k,t6) : (g = d.innerHTML, h = Math.floor(21 * Math.random() + 5), c = 32 == a[b] ? 32 : a[b] - h, f = setInterval(function() {
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
    
    const test = () => {
      this.setState({'initialized':true});
    }

    SPY.text('targetName',test)
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
          <h1 id='targetName' className='userName' onClick={this.nameAnmation}>chouno yukihiko</h1>
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
      </div>
    );
  }
}
