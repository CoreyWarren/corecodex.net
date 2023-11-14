import {Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

const Navbar = () => {
    const dispatch = useDispatch();


    const authLinks = (
        <>
            <li className="nav-item">
                <NavLink className='nav-link' to='/dashboard'>
                    Dashboard
                </NavLink>
            </li>


        </>
    );

    const guestLinks = (
        <>

        <li className="nav-item">
            <NavLink className='nav-link' to='https://coldcmerch.com'>
                COLD CUT
            </NavLink>
        </li>

        </>
    );


    return(
        <nav className="navbar navbar-expand-lg bg-dark custom-navbar">


            <div className="container-fluid">

            <div className="navbar-sidesection">
                <div className="navbar-divider"></div>
                <div className="navbar-divider-2"></div>
                <div className="navbar-title-1"></div>
                <div className="navbar-title-2"></div>
                <div className="navbar-title-3"></div>
                <div className="navbar-title-4"></div>
            </div>



                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >



                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#ffffff"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>


                </button>


                
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    


                    
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/'>
                            HOME
                        </NavLink>
                    </li>

                    { guestLinks }


                </ul>
                </div>
            </div>
        </nav>
    );
};










export default Navbar;