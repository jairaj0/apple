import React from 'react';

const NavLink = ({path , text}) => {
  return (
    <a className='navLink' href={path}>{text}</a>
  )
}

export default NavLink