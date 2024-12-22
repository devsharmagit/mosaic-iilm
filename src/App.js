import React, { useState } from 'react';
import HeroSection from './HeroSection';
import './App.css';


function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen((prev) => !prev)
  }

  return (
    <div>
      <header>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#events">Events</a></li>

            <li><a href="#rulebook">Rule Book</a></li>

            <li><a href="#gallery">Gallery</a></li>

            <li><a href="#contact">Contact</a></li>

            <li className='action__button__li'>
              <button className='action__button'>
                Register
              </button>
            </li>
            <li className='nav_button_li'>
              <button className='nav__button' onClick={handleClick}>
                {isNavOpen ?
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    height={25} width={25} >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  :

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height={25} width={25}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                }
              </button>

            </li>
          </ul>
          
        </nav>
        {isNavOpen && 
        <div className='mobile__nav'>
          <ul >
            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#events">Events</a></li>

            <li><a href="#rulebook">Rule Book</a></li>

            <li><a href="#gallery">Gallery</a></li>

            <li><a href="#contact">Contact</a></li>
          </ul>
          </div>
        }
      </header>
      <HeroSection />
    </div>
  );
}

export default App;
