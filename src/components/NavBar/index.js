import React from  'react'
import {Nav, NavLink, NavBars, NavMenu, NavBtn, NavBtnLink} from "./NavBarElements";
import logo from '../../images/house.png'

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt='logo' style={{height: 50, width: 64}}/>
                </NavLink>
                <NavBars/>
                <NavMenu>
                    <NavLink to='/search' activeStyle>
                        To Let
                    </NavLink>
                    <NavLink to='/services' activeStyle>
                        Services
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default NavBar;