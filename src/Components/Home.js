import Logo from './Logo.png'
import './Styles/Home.css'
import { Outlet, NavLink } from "react-router-dom"
import { SlArrowDown } from 'react-icons/sl'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import React, { useState, useEffect, useMemo } from "react";

const Home = () => {
  const [Text] = useTypewriter({
    words: ['Software Engineering Society'],
    loop: {},
    typeSpeed: 60,
    deleteSpeed: 30,
    delaySpeed: 800
  })

  const deadline = useMemo(() => new Date(2023, 10 - 1, 13, 23, 59, 59), []);//Year, Day-1, Date, year, 59, 59
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(deadline));
  const [registrationClosed, setRegistrationClosed] = useState(false);

  function getTimeRemaining(endtime) {
    const total = endtime - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const timeRemaining = getTimeRemaining(deadline);
      setTimeLeft(timeRemaining);
      if (timeRemaining.total <= 0) {
        setRegistrationClosed(true);
        clearInterval(timer);
      }
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [deadline]);

  return (
    <>
      <div className='home'>
        <div className='home-container'>
          <div className='content'>
            <h1>Welcome To</h1>
            <div className='change-text'>
              <h2><span className='word'>{Text}<Cursor /></span></h2>
            </div>
            <p>A Software Engineering Society is a professional community fostering collaboration among software engineers, developers, and researchers.</p>
            <p>It provides networking opportunities, knowledge sharing platforms, and promotes continuous learning through workshops, seminars, and conferences.</p>
          </div>
          <div className='btnDiv'>
            <p id='p1'>Registration deadline:</p>
            {!registrationClosed ? <p id='p2'>{timeLeft.days} days{" "}
              {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds}{" "}
              seconds left</p> : <p id='p3'>Registration Closed</p>}
            {!registrationClosed ? <NavLink to='/registration'><button className='btn'>Register</button></NavLink> : <div></div>}

          </div>
        </div>
        <div className='sideImage'><img className='image' src={Logo} alt='SES'/></div>
        <div className="App">
        </div>
      </div>
      <center><i><SlArrowDown className='down-arrow' /></i></center>
      <Outlet />
    </>
  )
}
export default Home