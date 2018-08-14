import React, { Component } from "react";
import ClassNames from "classnames";

export class CaptureImage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            expand:true,
            shrink:false,
            show:true
        };
    };
    componentDidMount(){
        
    }

    expand(){
        this.setState({'expand':!this.state.expand});
    }
    
    shrink(){

    }

    delete(){
        this.setState({'show':false});
    }

    render() {
        const pcState = ClassNames(
            'pc',
            {
                'from_bottom':this.props.show,
                'expand':this.state.expand,
                'notDisplay':!this.state.show
            }
        )
        return(
            <div id={this.props.captureID} className={pcState}>
                <span onClick={()=>this.delete()}></span>
                <span onClick={()=>this.shrink()}></span>
                {/* <a href={'#'+this.props.captureID}> */}
                    <span onClick={()=>this.expand()}></span>
                {/* </a> */}
                <img src={this.props.target}/>
            </div>
        )
    }
}