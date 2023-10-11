import './Styles/Registration.css'
import { Outlet, NavLink } from "react-router-dom"
export default function Registration() {
    return (
        <div className='content-r'>
            <h1>Welcome To Registration Page</h1>
            <span>Select Your Semester No</span>
            <div className='all-btn'>
                <NavLink to='https://form.jotform.com/232804596523460' target='next'><button className='btn-r'>Semester 01</button></NavLink>
                <NavLink to='https://form.jotform.com/232804999904470' target='next'><button className='btn-r'>Semester 02</button></NavLink>
                <NavLink to='https://form.jotform.com/232804716423453' target='next'><button className='btn-r'>Semester 03</button></NavLink>
                <NavLink to='https://form.jotform.com/232804643367459' target='next'><button className='btn-r'>Semester 04</button></NavLink>
                <NavLink to='https://form.jotform.com/232805320546451' target='next'><button className='btn-r'>Semester 05</button></NavLink>
                <NavLink to='https://form.jotform.com/232805410589458' target='next'><button className='btn-r'>Semester 06</button></NavLink>
                <NavLink to='https://form.jotform.com/232805685517463' target='next'><button className='btn-r'>Semester 07</button></NavLink>
                <NavLink to='https://form.jotform.com/232804790578466' target='next'><button className='btn-r'>Semester 08</button></NavLink>
            </div>
            <Outlet />
        </div>
    )
}