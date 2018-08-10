import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { BackgroundSlide } from "../componemt/BackgroundSlide";

export class MainVisual extends Component {
  constructor(props) {
      super(props);
      this.nameAnmation = this.nameAnmation.bind(this);
      this.expandAnimation = this.expandAnimation.bind(this);
      this.state = {
        'isExpand':false,
        'ttf':false,
        'seto':false,
        'shimogamo':false,
        'chrono':false,
        'dashboard':false
      };
  };
  changeSlide(targetName,isShow){
    if(targetName=='ttf'){
      this.setState({'ttf':isShow})
    }else if(targetName=='seto'){
      this.setState({'seto':isShow})
    }else if(targetName=='shimogamo'){
      this.setState({'shimogamo':isShow})
    }else if(targetName=='chrono'){
      this.setState({'chrono':isShow})
    }else if(targetName=='dashboard'){
      this.setState({'dashboard':isShow})
    }
  }

  componentWillAppear(done){
  }
  componentDidMount(done) {
    this.nameAnmation()
  }

  expandAnimation(){
    this.setState({"isExpand":!this.state.isExpand});
  }

  nameAnmation(){
    let portfolio = document.getElementById('portfolio');
    portfolio.classList.remove('from_bottom');
    let SPY = function() {
      function e(a, d, b) {
        var c, f, g, h;
        b == a.length ? k.animationComplete = !0 : (g = d.innerHTML, h = Math.floor(21 * Math.random() + 5), c = 32 == a[b] ? 32 : a[b] - h, f = setInterval(function() {
          d.innerHTML = g + String.fromCharCode(c);
          c == a[b] ? (clearInterval(f), c = 32, b++, setTimeout(function() {
            e(a, d, b);
          }, 10)) : c++;
        }, 2));
      }
      let k = {};
      return k = {animationComplete:!1, text:function(a) {
        this.animationComplete = !1;
        a = document.getElementById(a);
        for (var d = a.innerHTML, b = [], c = 0;c < d.length;c++) {
          b.push(d.charCodeAt(c));
        }
        a.innerHTML = "";
        e(b, a, 0);
      }};
    }();
    
    SPY.text('targetName')
    setTimeout(() => {
      portfolio.classList.add('from_bottom');
    }, 100);
  }

  componentDidEnter() {
  }

  render() {
    return (
      <div className={this.state.ttf?'wrapper ttf_slide':'wrapper'}>
        <BackgroundSlide
        ttf={this.state.ttf}
        seto={this.state.seto}
        shimogamo={this.state.shimogamo}
        chrono={this.state.chrono}
        dashboard={this.state.dashboard}/>
        <section className="sign">
          <h1 id='targetName' className='userName' onClick={this.nameAnmation}>chouno yukihiko</h1>
          <p id='portfolio' className='portfolio_title'>Portfolio</p>
          <button className={this.state.isExpand?'expand_button selected':'expand_button'} onClick={this.expandAnimation}>
          </button>
        </section>
        <ul className='performance_container from_small'>
          <li className={this.state.isExpand?'expand':''}>
            <Link to="/TTFConverter">
              <figure className='ttf_figure'
               onMouseEnter={()=>this.changeSlide('ttf',true)}
               onMouseLeave={()=>this.changeSlide('ttf',false)}>
                <p>TTFConverter
                <br/>
                  <span>Webフォント作成アプリ</span>
                </p>
              </figure>
            </Link>
          </li>
          <li className={this.state.isExpand?'expand':''}>
            <Link to="/setogreenEstate">
              <figure className='seto_figure'
              onMouseEnter={()=>this.changeSlide('seto',true)}
              onMouseLeave={()=>this.changeSlide('seto',false)}>
                <p>瀬戸グリーン不動産
                <br/>
                  <span>不動産検索エンジン</span>
                </p>
              </figure>
            </Link>
          </li>
          <li className={this.state.isExpand?'expand':''}>
            <Link to="/shimogamodeli">
              <figure className='shimogamo_figure'
              onMouseEnter={()=>this.changeSlide('shimogamo',true)}
              onMouseLeave={()=>this.changeSlide('shimogamo',false)}>
                <p>下鴨デリ
                <br/>
                  <span>デリカフェのホームページ</span>
                </p>
              </figure>
            </Link>
          </li>
          <li className={this.state.isExpand?'expand':''}>
            <Link to="/chronograph">
              <figure className='chrono_figure'
              onMouseEnter={()=>this.changeSlide('chrono',true)}
              onMouseLeave={()=>this.changeSlide('chrono',false)}>
                <p>会社年表<br/>
                  <span>社内研修用の年表</span>
                </p>
              </figure>
            </Link>
          </li>
          <li className={this.state.isExpand?'expand':''}>
            <Link to="/dashboard">
              <figure className='dashboard_figure'
              onMouseEnter={()=>this.changeSlide('dashboard',true)}
              onMouseLeave={()=>this.changeSlide('dashboard',false)}>
                <p>ダッシュボード
                <br/>
                  <span>分析用管理画面のサンプル</span>
                </p>
              </figure>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
