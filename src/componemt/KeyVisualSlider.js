import React, { Component } from 'react'
import ClassNames from 'classnames'
import $ from 'jquery';

const scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
const dispnone = {
  display: 'none'
}

export default class HeaderPhoto extends Component {

  constructor(props) {

    super(props);
    this.state = {
      mainPhoto: this.props.images,
      isShow: this.props.show,
      height: $(window).innerHeight(),
      contentHeight: 0,
      slidedot: (this.props.images&&this.props.images.length == 1) ? true : false,
      currentImage: 0,
    }
    this.updateDimensions = this.updateDimensions.bind(this)
    this.updatePhotoPositionOnScroll = this.updatePhotoPositionOnScroll.bind(this)
    this.changePhotoBtnOnClick = this.changePhotoBtnOnClick.bind(this)
    this.autoSlidePhoto = this.autoSlidePhoto.bind(this)
    this.nextPhoto = this.nextPhoto.bind(this)

  }

  componentWillMount(){
  }

  componentDidMount(){
    $(window).on('scroll',() => {
      this.updatePhotoPositionOnScroll();
    })
    let _contentHeight = Math.max.apply( null, [document.body.clientHeight , document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight] );
    this.setState({
      contentHeight: _contentHeight
    })

    if(this.state.mainPhoto&&this.state.mainPhoto.length !== 1) {
      this.autoSlidePhoto();
    }
  }
  componentWillReceiveProps(nextProps){
    if(!this.state.isShow) {
      this.setState({
        isShow: nextProps.show
      })
    }
  }

  componentWillUnmount(){
    window.removeEventListener(scroll_event, this.updatePhotoPositionOnScroll)
    this.loopIns = {}
  }

  updateDimensions(){
    this.setState({width: $(window).innerWidth(), height: $(window).innerHeight()});
  }

  // Fixedのscale半分だけ、動かせる(parallax)
  // ページの高さが移動する量
  updatePhotoPositionOnScroll(){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let movep = ((this.state.height * 1.1) - this.state.height )/ 2
    // $('.header__photo figure').css({top: movep/scrollTop})
    // this.setState({
    //   position: movep/scrollTop
    // })
  }

  autoSlidePhoto(){
    setTimeout(function(){
      this.setState({
        isShow: true,
        currentImage: (this.state.currentImage + 1 < this.props.images.length) ? this.state.currentImage + 1:0
      })
      // setTimeout(function(){
      //   this.setState({
      //     isShow: true
      //   })
      //   this.autoSlidePhoto();
      // }.bind(this), 1500)
      this.autoSlidePhoto();
    }.bind(this), 6500)
  }

  nextPhoto(e){

    clearTimeout(this.autoSlidePhoto);
    this.setState({
      currentImage: (this.state.currentImage + 1 < this.props.images.length) ? this.state.currentImage + 1:0
    })
  }

  // スライドのどれかが押された時点でcurrentImageを変更
  changePhotoBtnOnClick(e,i){
    clearTimeout(this.autoSlidePhoto);
    this.setState({
      isShow: true,
      currentImage: i
    })
    // setTimeout(function(){
    //   this.setState({
    //     isShow: true
    //   })
    // }.bind(this), 1500)
  }

  render(){
    if(!this.props.images||this.props.images.length==0){
      return null
    }
    let classes = ClassNames({
      "header__photo": true,
      "is-show": this.state.isShow
    })

    let dots = () => {
      let show = this.state.slidedot ? 'display' : 'none';
      return (
        <div className="dots" style={{display: `${show}`}}>
          {
            this.state.mainPhoto.map((photo,i) => {
              return <button key={i}
                             onClick={e => this.changePhotoBtnOnClick(e,i)}
                             className={(i === this.state.currentImage) ? "is-current" : ""}
              >{i + 1}</button>
            })
          }
          <div className="cache">
            {
              this.state.mainPhoto.map((photo,i) => {
                return <img key={i} src={photo} />
              })
            }
          </div>
        </div>
      )
    }

    return (
      <div className={classes}>
        {dots()}
        <figure
          style={{
          backgroundImage: `url(${this.props.images[this.state.currentImage]})`
        }}>
          <img src={this.props.images[this.state.currentImage]} style={dispnone}/>
        </figure>
      </div>
    );
  }
}