import React,{Component} from 'react';
import ScrollTop from "./componemt/ScrollTop";
import { Route ,Switch} from 'react-router-dom'
import './assets/css/reset.css';
import './assets/css/main.css';
import './assets/css/keyframe.css';
import './assets/css/slider.css';
import './assets/css/detail.css';
import './assets/css/photo.css';
import './assets/css/header.css';
import {MainVisual} from './pages/MainVisual';
import Header from "./componemt/Header";
import DetailDescription from "./componemt/DetailDescription";

const rootPath = '/portfolio/';
const deploy=true;

export class App extends Component{
  constructor(props){
    super(props)
    this.converted = false;
    this.state = {
      data:[],
      name:'',
      showModal:false
    }
  }
  
  componentDidMount(){
    const jsonPath=deploy?'https://chouno.github.io/portfolio/Performance_2.json':'../Performance.json'
    fetch(jsonPath)
    .then((data)=>{
      if(data.status!=200){
        throw Error(data);
      }
      return data;
    })
    .then((res)=>res.json())
    .then((result)=>{
      this.setState({
        'data':result.data,
        'name':result.name
      })
    })
    .catch((error)=>{
      console.log('E1 fetch >> '+error);
    })
  }

  menuModalFade(val){
    this.setState({
      'menuModalFade':val
    })
  }

  render(){
    if(this.state.name==''){
      return null;
    }else{
      const userData = this.state.data;
      return(
        <ScrollTop>
          <Route exact path={rootPath} render={()=><Home name={this.state.name} data={this.state.data}/>}/>
           {this.state.data.map((target,index) => {
             return (
              <Route exact path={target.path} key={index} render={()=><div><Header menuModalFade={(val)=>this.menuModalFade(val)} data={userData} hide={target.path}/><DetailContainer modalShow={this.state.showModal} data={target}/></div>}/>
             )
            })}
        </ScrollTop>
      )
    } 
  }
}

const DetailContainer = ({data}) =>{
  return(
    <DetailDescription data={data}/>
  )
}

const Home = ({name,data}) => {
  return(
    <div className='background_frame'>
      <MainVisual
        name={name}
        data={data}
      />
    </div>
  )
}

export default App;
