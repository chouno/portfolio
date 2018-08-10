import React, { } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './assets/css/reset.css';
import './assets/css/main.css';
import './assets/css/keyframe.css';
import './assets/css/slider.css';
import {MainVisual} from './pages/MainVisual';
import {TTFConverter} from './pages/FontConverter';
import {Setogreen} from './pages/Setogreen';
import {Shimogamodeli} from './pages/Shimogamodeli';
import {Chronograph} from './pages/Chronograph';
import {Dashboard} from './pages/Dashboard';

const App = () => (
  <BrowserRouter>
    <div className='background_frame'>
      <Route exact path='/' component={Home} />
      <Route path='/TTFConverter' component={Sample1} />
      <Route path='/setogreenEstate' component={Sample2} />
      <Route path='/shimogamodeli' component={Sample3} />
      <Route path='/chronograph' component={Sample4} />
      <Route path='/dashboard' component={Sample5} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <MainVisual/>
)

const Sample1 = () => (
  <TTFConverter/>
)

const Sample2 = () => (
  <Setogreen/>
)

const Sample3 = () => (
  <Shimogamodeli/>
)

const Sample4 = () => (
  <Chronograph/>
)

const Sample5 = () => (
  <Dashboard/>
)

export default App;
