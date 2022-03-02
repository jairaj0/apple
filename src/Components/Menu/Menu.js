import React from 'react';
import './Menu.scss';

const Menu = ({menuState}) => {
  console.log(menuState)
  return (
    <section>
      <div className='menu'>
        <div className={`${menuState ? "line1" : ""} line`} ></div>
        <div className={`${menuState ? "line2" : ""} line`} ></div>
    </div>

    <div style={{ top : `${menuState ? "44px" : "-130vh"}`}} className="menuBg">
    </div>
    </section>
  )
}

export default Menu