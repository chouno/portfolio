import React, { Component } from 'react';
import ttf1 from '../assets/img/ttf/drop.png';
import ttf2 from '../assets/img/ttf/droped.png';
import ttf3 from '../assets/img/ttf/top.png';
import ttf4 from '../assets/img/ttf/downloaded.png';
import ttf5 from '../assets/img/ttf/guide.png';
import seto1 from '../assets/img/seto/top.png';
import seto2 from '../assets/img/seto/search.png';
import seto3 from '../assets/img/seto/map_selected.png';
import seto4 from '../assets/img/seto/detail.png';
import seto5 from '../assets/img/seto/word_description.png';
import shimogamo1 from '../assets/img/shimogamo/top.png';
import shimogamo2 from '../assets/img/shimogamo/menu.png';
import shimogamo3 from '../assets/img/shimogamo/about.png';
import shimogamo4 from '../assets/img/shimogamo/gallery.png';
import shimogamo5 from '../assets/img/shimogamo/new.png';
import chrono1 from '../assets/img/history/top.png';
import chrono2 from '../assets/img/history/enter.png';
import chrono3 from '../assets/img/history/select.png';
import chrono4 from '../assets/img/history/detail1.png';
import chrono5 from '../assets/img/history/detail2.png';
import dashboard1 from '../assets/img/dashboard/dashboard1.png';
import dashboard2 from '../assets/img/dashboard/dashboard2.png';
import dashboard3 from '../assets/img/dashboard/pie.png';
import dashboard4 from '../assets/img/dashboard/user.png';
import dashboard5 from '../assets/img/dashboard/report.png';

export class BackgroundSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    };

    render() {
        if(this.props.ttf){
            // let imgArr = [];
            // console.log('kita');
            // for (let i = 0; i < slidArr.length; i++) {
            //     imgArr.push(<img src={slidArr[i]} key={i} />)
            // }
            return (
                <div className="slide_container">
                    <img className='slide_image1' src={ttf1} />
                    <img className='slide_image2' src={ttf2} />
                    <img className='slide_image3' src={ttf3} />
                    <img className='slide_image4' src={ttf4} />
                    <img className='slide_image5' src={ttf5} />
                    {/* {imgArr} */}
                </div>
            );
        }else if(this.props.seto){
            return (
                <div className="slide_container">
                    <img className='slide_image1' src={seto1} />
                    <img className='slide_image2' src={seto2} />
                    <img className='slide_image3' src={seto3} />
                    <img className='slide_image4' src={seto4} />
                    <img className='slide_image5' src={seto5} />
                    {/* {imgArr} */}
                </div>
            );
        }else if(this.props.shimogamo){
            return (
                <div className="slide_container">
                    <img className='slide_image1' src={shimogamo1} />
                    <img className='slide_image2' src={shimogamo2} />
                    <img className='slide_image3' src={shimogamo3} />
                    <img className='slide_image4' src={shimogamo4} />
                    <img className='slide_image5' src={shimogamo5} />
                    {/* {imgArr} */}
                </div>
            );
        }
        else if(this.props.chrono){
            return (
                <div className="slide_container">
                    <img className='slide_image1' src={chrono1} />
                    <img className='slide_image2' src={chrono2} />
                    <img className='slide_image3' src={chrono3} />
                    <img className='slide_image4' src={chrono4} />
                    <img className='slide_image5' src={chrono5} />
                    {/* {imgArr} */}
                </div>
            );
        }
        else if(this.props.dashboard){
            return (
                <div className="slide_container">
                    <img className='slide_image1' src={dashboard1} />
                    <img className='slide_image2' src={dashboard2} />
                    <img className='slide_image3' src={dashboard3} />
                    <img className='slide_image4' src={dashboard4} />
                    <img className='slide_image5' src={dashboard5} />
                    {/* {imgArr} */}
                </div>
            );
        }
        else{
            console.log('非表示');
            return null;
        }
    }

    // Image = props => {
    //     return <img className={this.props.imgClass} src={this.props.src}/>;
    // };
}