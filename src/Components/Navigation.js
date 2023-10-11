import './Styles/Navigation.css';
import { CgMenuRightAlt } from 'react-icons/cg'
import { MdOutlineBedtime } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import { Outlet, NavLink } from "react-router-dom"
import { useEffect, useState } from 'react';
const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  const [clicked, setClick] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [theme, setTheme] = useState("dark-theme");
  const handleClick = () => {
    setClick(!clicked);
    setNavbar(!navbar);
  }
  const handleMode = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
    setLightMode(!lightMode);
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  return (
    <>
      <div className="header">
        <h1 className='logoText'><span className='FirstLetter'>SeS</span></h1>
        <ul className={navbar ? "navbar mobile-menu" : "navbar"}>
          <li><NavLink to='/home' onClick={handleClick}>Home</NavLink></li>
          <li><NavLink to='about' onClick={handleClick}>About</NavLink></li>
          <li><NavLink to='services' onClick={handleClick}>Services</NavLink></li>
          <li><NavLink to='career' onClick={handleClick}>Career</NavLink></li>
          <div>
            <i className='pc-mode'>{!lightMode ? <MdOutlineLightMode className='ldMode pc-mode' onClick={handleMode} /> : <MdOutlineBedtime className='ldMode pc-mode' onClick={handleMode} />}</i>
            <NavLink to='contact'> <button className='btn' onClick={handleClick}>Contact</button></NavLink>
          </div>
        </ul>
        <div className='m-mode-toggle' id='m-mode'>
          {!clicked ? <CgMenuRightAlt className='toggle' onClick={handleClick} /> : <ImCross className='toggle' id='cross' onClick={handleClick} />}
          <i className='mobile-mode' id='m-mode'>{!lightMode ? <MdOutlineBedtime className='ldMode mobile-mode' onClick={handleMode} /> : <MdOutlineLightMode className='ldMode mobile-mode' onClick={handleMode} />}</i>
        </div>
      </div>
      <Outlet />
    </>
  )
}
export default Navigation