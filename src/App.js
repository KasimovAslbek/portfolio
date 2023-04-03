import React from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu';

import './index.css';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app ">
      <Topbar menuOpen={menuOpen} setMenuOpen = {setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sectons relative top-[70px]  text-3xl  snap-y snap-mandatory h-screen w-full mx:auto overflow-scroll scroll-smooth ">
        <Intro />
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
