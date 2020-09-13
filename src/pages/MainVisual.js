import React, { Component } from 'react';
import { BackgroundScreen } from "../componemt/BackgroundScreen";
import PerformanceContainer from "../componemt/PerformanceContainer";
import Preloader from "../componemt/Preloader";
import Classnames from 'classnames'

export class MainVisual extends Component {
  constructor(props) {
      super(props);
      this.nameAnmation = this.nameAnmation.bind(this);
      this.expandAnimation = this.expandAnimation.bind(this);
      this.playOnClick = this.playOnClick.bind(this)
      this.lastSelectedPlayValue = 0;
      this.performanceMouseEventHander = this.performanceMouseEventHander.bind(this)
      this.allSlide=[];
      this.ids=[];
      this.state = {
        initialized:false,
        isExpand:true,
        autoPlay:false,
        pause:false,
        currentSlide:[],
        currentHoverTarget:''
      };
  };

  componentDidMount(done) {
    this.genDisplayData();
    this.nameAnmation();
  }

  genDisplayData(){
    let allSlide = [];
    let allID = [];
    this.props.data.forEach((target)=>{
      Array.prototype.push.apply(allSlide,target.captures);
      allID.push(target.id);
    });
    this.allSlide = allSlide;
    this.ids = allID;
  }

  changeSlide(targetName,isShow){
    let currentSlide = [];
    this.props.data.forEach((target,index)=>{
      if(target.id==targetName){
        currentSlide=target.captures;
      }
    });
    this.setState({currentHoverTarget:isShow?targetName:''});
    this.setState({
      'currentSlide':isShow?currentSlide:[]
    });
  }

  playOnClick(){
    const currentValue = this.state.autoPlay;
    if(!currentValue){
      this.setState({"autoPlay":!this.state.autoPlay})
      this.state.pause = false;
      this.setState({'isExpand':false})
      this.nextPlay();
    }else{
      this.setState({
        'pause':!this.state.pause
      })
    }
  }

  slideFinished(){

  }

  performanceMouseEventHander(target,value){
    if(!this.state.autoPlay){
      this.expandAnimation();
      this.changeSlide(target,value);
    }else{
      let prev = 0;
      this.props.data.forEach((performance,index) => {
        if(performance.id==target){
          prev=index-1;
        }
      });
      if(prev<0){
        prev=0;
      }
      this.lastSelectedPlayValue=this.ids[prev];
      this.nextPlay();
    }
  }

  nextPlay(){
    if(this.lastSelectedPlayValue==0){
      this.lastSelectedPlayValue=this.ids[this.ids.length-1];
    }
    let targetIndex = this.ids.indexOf(this.lastSelectedPlayValue)+1;
    if(targetIndex>this.ids.length-1){
      targetIndex=0;
    }
    
    this.changeSlide(this.currentSlide,false);
    this.changeSlide(this.props.data[targetIndex].id,true);
    this.lastSelectedPlayValue=this.ids[targetIndex];
    this.currentSlide=this.props.data[targetIndex].id;
  }

  closedFigureOnClick(target){
    this.state.pause=false;
    this.refs.bgSc.forceSlideChange();
    let targetIndex = this.ids.indexOf(target)-1;
    if(targetIndex<0){
      targetIndex = this.ids.length-1;
    }
    this.lastSelectedPlayValue=this.ids[targetIndex];
    this.currentSlide=this.props.data[targetIndex].id;
    this.nextPlay();
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
    
    const initializedComplete = () => {
      this.setState({'initialized':true});
    }

    SPY.text('targetName',initializedComplete)
    setTimeout(() => {
      portfolio.classList.add('from_bottom');
    }, 100);
  }

  componentDidEnter() {
  }

  stopSlideOnClick(){
    this.setState({"autoPlay":false})
    this.lastSelectedPlayValue=0;
    this.state.pause = false;
    this.changeSlide(this.currentSlide,false)
    this.expandAnimation();
  }

  render() {
    const controllerClassName = Classnames(
      'controller_container',
      {
        'playing':this.state.autoPlay,
        'hide':this.state.currentHoverTarget!=''&&!this.state.autoPlay
      }
    )
    return (
      <div className={this.state.initialized?'wrapper initialized':'wrapper'}>
        <canvas id="floating_canvas"/>
        <BackgroundScreen
        autoPlay={this.state.autoPlay}
        nextPlay={()=>this.nextPlay()}
        photos={this.state.currentSlide}
        pause={this.state.pause}
        ref='bgSc'
        />
        <section className="sign">
          <h1 id='targetName' className='userName serif' onClick={this.nameAnmation}>{this.props.name}</h1>
          <p id='portfolio' className='portfolio_title'>Portfolio</p>
          <div className={controllerClassName}>
            <button 
            className={this.state.isExpand?'expand_button selected':'expand_button'} 
            onClick={this.expandAnimation}>
            </button>
            <button 
            className={this.state.autoPlay&&!this.state.pause?'play_button stop':'play_button'} 
            onClick={this.playOnClick}>
            </button>
            <button 
            className={this.state.autoPlay?'pause_button stop':'pause_button'}
            onClick={()=>this.stopSlideOnClick()}>
            </button>
          </div>
        </section>
        <PerformanceContainer
          data={this.props.data}
          autoPlay={this.state.autoPlay}
          isExpand={this.state.isExpand}
          pause={this.state.pause}
          onMouseEnter={(performanceName,isShow)=>this.performanceMouseEventHander(performanceName,isShow)}
          currentHoverTarget={this.state.currentHoverTarget}
          closedFigureOnClick={(target)=>this.closedFigureOnClick(target)}
        />
        {this.allSlide.map((target,index) => {
            return <Preloader key={index} path={target}/>
        })}
      </div>
    );
  }
}
