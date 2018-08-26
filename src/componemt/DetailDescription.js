import React, { Component } from "react";
import { CaptureImage } from "./CaptureImage";
export default class DetailDescription extends Component{
    constructor(props) {
        super(props);
        this.state = {
            delete:false,
            keyVisualOnMouseEvent:false

        };
    }
    
    render (){
        const targetIndex = this.props.data.main||0;
        const color = this.props.data.color||'#000';
        const plusStyle = {
            display:this.props.data.frameworks?'block':'none'
        }
        return(
            <div className='detail_wrapper'>
                <div 
                className='header_keyvisual'
                style={{
                    backgroundImage: this.props.data.captures.length>0?`url(${this.props.data.captures[targetIndex]})`:''
                }}
                 ></div>
                 <div className='detail_content_wrapper'
                    style={{
                        borderTopColor:color
                    }}>
                    <h1 className='detail_title'>{this.props.data.title}</h1>
                    <section className='framework_container'>
                        <p className='language'>{this.props.data.language}</p>
                        <p style={plusStyle}>+</p>
                        <p className='frameworks'>{this.props.data.frameworks}</p>
                        <p className='description'>{this.props.data.description}</p>
                    </section>
                    <div className='pc_wrapper'>
                        {this.props.data.captures.map((target,index) => {
                            return(
                                <CaptureImage
                                captureID={'capture'+(index+1)}
                                target={target} 
                                key={index.toString()}/>
                            )  
                        })}
                    </div>
                 </div>
            </div>
        )
    }
}