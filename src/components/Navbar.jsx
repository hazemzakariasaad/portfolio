import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from "react-scroll";
import logo from '../assets/logo.png';
import { useTheme } from "../common/ThemeContext";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const themeICon = theme === "light" ? sun : moon;
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();  // Ensure you're calling the function here
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();  // Also here
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className='nav_container'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h1 className='h1nav'>Hazem Zakaria</h1>
                    <img src={logo} alt='logo' className='logo' />
                </div>
                <a className={`nav--ham`} onClick={toggleNav}>
                    <span className='nav__line'></span>
                    <span className='nav__line'></span>
                    <span className='nav__line'></span> 
                </a>
                <div className={`nav--items ${navActive ? "active" : ""}`}>
                    <ul>
                        <img
                            className="img-icon"
                            src={themeICon}
                            alt="color mode icon"
                            onClick={toggleTheme}
                        />
                        {["Home", "Aboutme", "skills", "Projects", "contact"].map((section) => (
                            <li key={section}>
                                <Link
                                    onClick={closeMenu}
                                    activeClass="navBar--active--content"
                                    spy={true}
                                    smooth={true}
                                    duration={100}
                                    to={section}
                                    className='nabaar--content'
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)} {/* Capitalize first letter */}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
