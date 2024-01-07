import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";


import './header.scss'
import Wrapper from '../wrapper/wrapper';

const Header = () => {
    const [menuIcon, setMenuIcon] = useState(true);
    const [mobileMenu, setMobileMenu] = useState('');

    const showMenu = () => {
        setMenuIcon(false)
        setMobileMenu('mobileMenu')
    }

    const closeMenu = () => {
        setMenuIcon(true)
        setMobileMenu('')
    }

    return (
        <Wrapper>
            <section className='header'>
                <section className='logo'>
                    <img src="/logo.png" alt="campustech" />
                </section>
                <nav className={`menu ${mobileMenu}`}>
                    <ul>
                        <li>
                            Solutions
                            <IoIosArrowDown />
                        </li>
                        <li>
                            Resources
                            <IoIosArrowDown />
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Contact Us
                        </li>
                    </ul>
                    <button className='navBtn'>
                        Login
                    </button>
                </nav>
                {
                    menuIcon ? < RiMenu4Line className='menuIcon' onClick={() => showMenu()} /> : <RiCloseLine className='menuIcon' onClick={() => closeMenu()} />
                }
            </section>
        </Wrapper >
    )
}

export default Header;
