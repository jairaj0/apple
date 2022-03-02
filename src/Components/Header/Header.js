import React,{ useState } from 'react';
import {AiOutlineCheck } from 'react-icons/ai';
import {IoCloseOutline } from 'react-icons/io5';
import {BsChevronDown} from 'react-icons/bs';
import './Header.scss';

const Header = () => {
    const [show, setShow] = useState(true);

  return (
    <div style={{display : `${show ? "block" : "none"}`}} className="header">
        <div className="header_c container flex-between">
        <p>Choose another country or region to see content specific to your location.</p>
        <div className="rightHeader flex">
        <div className="drobBox flex-between">
        <div className='flex'>
        <AiOutlineCheck />
        <h4>India</h4>
        </div>
        <BsChevronDown />
        </div>

        <button className='continue flex-center' onClick={() => setShow(false)}>Continue</button>
        <button className='close flex-center' onClick={() => setShow(false)}><IoCloseOutline /></button>
        </div>
        </div>
    </div>
  )
}

export default Header