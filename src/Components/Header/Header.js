import React from 'react';
import AiOutlineCheck from 'react-icons/ai';
import BsChevronDown from 'react-icons/bs';

const Header = () => {
  return (
    <div className="header">
        <div className="container flex-between">
        <p>Choose another country or region to see content specific to your location.</p>
        <div className="drobBox flex-between">
        <AiOutlineCheck />
        <h2>India</h2>
        <BsChevronDown />
        </div>
        </div>
    </div>
  )
}

export default Header