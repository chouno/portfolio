import React, { Component } from "react";
import { CaptureImage } from "./CaptureImage";
let convertTarget;
export class DetailDescription extends Component{
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {

        };
      }
      
      handleScroll(event) {
        //Todo 要素が見える時に表示するアニメーション
      };

      componentDidMount() {
        this.eventHandler = this.handleScroll.bind(this);
        window.addEventListener('scroll', this.eventHandler,true);
        // convertTarget = 
      };
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.eventHandler,true);
      };

    render (){
        // let convertTarget = this.props.data.description;
        // const enter = '\n';
        return(
            <div className='detail_wrapper'>
                <h1 className='detail_title'>{this.props.data.title}</h1>
                <section className='framework_container'>
                <p className='language'>{this.props.data.language}</p>
                <p className='frameworks'>{this.props.data.frameworks}</p>
                <p className='description'>{this.props.data.description}</p>
                </section>
                {this.props.data.captures.map((target,index) => {
                    return(
                        <CaptureImage target={target} key={index.toString()}/>
                    )  
                })}
            </div>
        )
    }
}