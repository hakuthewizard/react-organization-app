import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css';
import tree from './Icons/tree_light.png';
import maple from './Icons/maple.png';
import plant from './Icons/plant.png';

const Navbar = () => {

    return (
        <nav className='navbar'>
            <ul className='navbar_list'>
            <li className='navbar_item'>
                <NavLink style={{color: 'inherit', textDecoration: 'none' }}
                 to="/notes">
                <a className='navbar_link' href='#'>
                <img className="navbar_icon" src={tree}/>
                <span className='navbar_itemtitle'>Add Notes</span>
                </a>
                </NavLink>
            </li>
            
           
            <li className='navbar_item'>
                <NavLink style={{color: 'inherit', textDecoration: 'none' }}
                to="/lists">
                <a className='navbar_link' href='#'>
                <img className="navbar_icon" src={maple}/>
                <span className='navbar_itemtitle'>Add List</span>
                </a>
                </NavLink>
            </li>
            <li className='navbar_item'>
                <NavLink style={{color: 'inherit', textDecoration: 'none' }}
                to="calendar">
                <a className='navbar_link' href='#'>
                <img className="navbar_icon" src={plant}/>
                <span className='navbar_itemtitle'>Calendar</span>
                </a>
                </NavLink>
            </li>
            </ul>
        </nav>

    )
}
export default Navbar;