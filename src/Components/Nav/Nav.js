import React from 'react';
import logo from '../../Assets/apple.svg';
import NavLink from '../NavLink/NavLink';
import { HiOutlineSearch } from 'react-icons/hi';
import { BsBag } from 'react-icons/bs';
import './Nav.scss';

const Nav = () => {
  const navLinks = [
    {text : "Store" , path : "/"},
    {text : "Mac" , path : "/"},
    {text : "iPad" , path : "/"},
    {text : "iPhone" , path : "/"},
    {text : "Watch" , path : "/"},
    {text : "AirPods" , path : "/"},
    {text : "TV & Home" , path : "/"},
    {text : "Only on Apple" , path : "/"},
    {text : "Accessories" , path : "/"},
    {text : "Support" , path : "/"},
    ]

  return (
    <nav>
        <div className="nav container flex-between">
          <button className="logo">
            <img src={logo} width="20px" alt={logo} />
          </button>
          {
            navLinks.map((value , index)=>(
              <NavLink
              key={index}
              text={value.text}
              path={value.path}
              />
            ))
          }
          <button className='navBtn'><HiOutlineSearch /></button>
          <button className='navBtn'><BsBag /></button>
        </div>
    </nav>
  )
}

export default Nav;