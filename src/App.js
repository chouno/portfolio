import React, { } from 'react';
// import {Provider} from 'react-redux'
// import store from './Store'
import { BrowserRouter, Route } from 'react-router-dom'
import './assets/css/reset.css';
import './assets/css/main.css';
import './assets/css/keyframe.css';
import './assets/css/slider.css';
import './assets/css/detail.css';
import './assets/css/photo.css';
import {MainVisual} from './pages/MainVisual';
import {TTFConverter} from './pages/TTFConverter';
import {Setogreen} from './pages/Setogreen';
import {Shimogamodeli} from './pages/Shimogamodeli';
import {Chronograph} from './pages/Chronograph';
import {Dashboard} from './pages/Dashboard';
import ttf1 from './assets/img/ttf/drop.png';
import ttf2 from './assets/img/ttf/droped.png';
import ttf3 from './assets/img/ttf/top.png';
import ttf4 from './assets/img/ttf/downloaded.png';
import ttf5 from './assets/img/ttf/guide.png';
import seto1 from './assets/img/seto/top.png';
import seto2 from './assets/img/seto/search.png';
import seto3 from './assets/img/seto/map_selected.png';
import seto4 from './assets/img/seto/detail.png';
import seto5 from './assets/img/seto/word_description.png';
import shimogamo1 from './assets/img/shimogamo/top.png';
import shimogamo2 from './assets/img/shimogamo/menu.png';
import shimogamo3 from './assets/img/shimogamo/about.png';
import shimogamo4 from './assets/img/shimogamo/gallery.png';
import shimogamo5 from './assets/img/shimogamo/new.png';
import chrono1 from './assets/img/history/top.png';
import chrono2 from './assets/img/history/enter.png';
import chrono3 from './assets/img/history/select.png';
import chrono4 from './assets/img/history/detail1.png';
import chrono5 from './assets/img/history/detail2.png';
import dashboard1 from './assets/img/dashboard/dashboard1.png';
import dashboard2 from './assets/img/dashboard/dashboard2.png';
import dashboard3 from './assets/img/dashboard/pie.png';
import dashboard4 from './assets/img/dashboard/user.png';
import dashboard5 from './assets/img/dashboard/report.png';
const ttfSlides = [ttf1,ttf2,ttf3,ttf4,ttf5]
const setoSlides = [seto1,seto2,seto3,seto4,seto5]
const shimogamoSlides = [shimogamo1,shimogamo2,shimogamo3,shimogamo4,shimogamo5]
const chronoSlides = [chrono1,chrono2,chrono3,chrono4,chrono5]
const dashboardSlides = [dashboard1,dashboard2,dashboard3,dashboard4,dashboard5]

const App = () => (
  // <Provider>
  //   <BrowserRouter store={store} >
  <BrowserRouter>
    <div className='background_frame'>
      <Route exact path='/' component={Home} />
      <Header/>
      <Route path='/TTFConverter' component={Sample1} />
      <Route path='/setogreenEstate' component={Sample2} />
      <Route path='/shimogamodeli' component={Sample3} />
      <Route path='/chronograph' component={Sample4} />
      <Route path='/dashboard' component={Sample5} />
    </div>
  </BrowserRouter>
  // </Provider>
)

const Header = () => ({
  render(){
    return(
      <div className>aaaa</div>
    )
  }
})

const Home = () => (
  <MainVisual 
  ttfSlides={ttfSlides}
  shimogamoSlides = {shimogamoSlides}
  setoSlides={setoSlides}
  chronoSlides={chronoSlides}
  dashboardSlides={dashboardSlides}
  />
)

const Sample1 = () => (
  <TTFConverter captures={ttfSlides}/>
)

const Sample2 = () => (
  <Setogreen captures={setoSlides}/>
)

const Sample3 = () => (
  <Shimogamodeli captures={shimogamoSlides}/>
)

const Sample4 = () => (
  <Chronograph captures={chronoSlides}/>
)

const Sample5 = () => (
  <Dashboard captures={dashboardSlides}/>
)

export default App;
