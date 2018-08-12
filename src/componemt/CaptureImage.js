import React, { Component } from "react";
import ClassNames from "classnames";

export class CaptureImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand:false,
            shrink:false,
            show:false
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

    }

    render() {
        const pcState = ClassNames(
            'pc',
            {
                'from_bottom':this.props.show,
                'expand':this.state.expand
            }
        )
        return(
            <div className={pcState}>
                <span onClick={()=>this.delete()}></span>
                <span onClick={()=>this.shrink()}></span>
                <span onClick={()=>this.expand()}></span>
                <img src={this.props.target}/>
            </div>
        )
    }
}