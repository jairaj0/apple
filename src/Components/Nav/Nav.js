import React,{ useState } from 'react';
import NavLink from '../NavLink/NavLink';
import { HiOutlineSearch } from 'react-icons/hi';
import { BsBag , BsApple } from 'react-icons/bs';
import './Nav.scss';
import Menu from '../Menu/Menu';

const Nav = () => {
  const [menuSate, setMenuSate] = useState(false)

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
  
    const menuBarFunc = () => {
      menuSate ? setMenuSate(false) : setMenuSate(true);
    }

  return (
    <nav>
        <div className="container flex-between">
        <button onClick={menuBarFunc} className="menuBtn flex-center">
          <Menu menuState={menuSate} />
        </button>

          <button className="logo">
            <BsApple  />
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
          <button className='navBtn search'><HiOutlineSearch /></button>
          <button className='navBtn'><BsBag /></button>
        </div>
    </nav>
  )
}

export default Nav;