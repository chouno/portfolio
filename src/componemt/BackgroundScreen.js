import React, { Component } from 'react';
import ClassNames from 'classnames'
const dummyImg = {
    display: 'none'
}
let lastDisplayPhotos = [];
let isFirstSlide = false;
export class BackgroundScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos:this.props.photos,
            currentImage: 0,
        };
    };
    componentDidMount(){
        
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutFunc);
    }

    autoSlidePhoto(){
        if(!this.props.photos||this.props.photos.length==0){
            clearTimeout(this.timeoutFunc);
        }else{
            this.timeoutFunc = setTimeout(function(){
                console.log('slide');
                this.setState({
                    currentImage: (this.state.currentImage + 1 < this.props.photos.length) ? this.state.currentImage + 1:0
                })
                this.autoSlidePhoto();
            }.bind(this), 3000)
        }
    }
    
    componentDidUpdate(){
        if(this.props.photos&&this.props.photos.length>0){
            if(lastDisplayPhotos!=this.props.photos){
                lastDisplayPhotos = this.props.photos
                //start slide
                isFirstSlide = true;
                clearTimeout(this.timeoutFunc);
                this.autoSlidePhoto()
            }
        }else{
            this.state.currentImage=0;
            lastDisplayPhotos = this.props.photos
            clearTimeout(this.timeoutFunc);
        }    
    }

    render() {
        console.log('render');
        if(this.props.photos&&this.props.photos.length>0){
            let sliderClass = ClassNames(
                'slide_container',
                {
                    'from_small_instantry':isFirstSlide
                }
            )
            if(isFirstSlide){
                isFirstSlide = false;
            }
            return (
                <figure className={sliderClass}
                style={{
                    backgroundImage: `url(${this.props.photos[this.state.currentImage]})`
                  }}
                >
                    <img src={this.props.photos[this.state.currentImage]} style={dummyImg}/>
                </figure>
            );
        }
        else{
            this.currentSlide='';
            isFirstSlide = true;
            clearTimeout(this.timeoutFunc);
            return null;
        }
    }
}