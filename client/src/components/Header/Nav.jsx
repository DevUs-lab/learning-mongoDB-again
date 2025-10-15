import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../scss/_Nav.scss'
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isAuth = false; // Change this based on your auth logic

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div style={{ background: "#6C757D" }}>
            <div className="container navbar-dark text-white">
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-between p-3">
                        {/* Logo */}
                        <h3 className="mb-0">
                            <NavLink to='/' className="text-decoration-none text-white fw-bold" onClick={closeMenu}>
                                Logo
                            </NavLink>
                        </h3>

                        {/* Desktop Navigation - hidden on mobile */}
                        <nav className="d-none d-lg-block">
                            <ul className="list-unstyled d-flex align-items-center mb-0">
                                <li>
                                    <NavLink
                                        to='/'
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/about'
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/contact'
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/services'
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                        }
                                    >
                                        Services
                                    </NavLink>
                                </li>

                                {/* Auth Links */}
                                {!isAuth ? (
                                    <>
                                        <li>
                                            <NavLink
                                                to='/auth/register'
                                                className={({ isActive }) =>
                                                    `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                                }
                                            >
                                                Register
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/auth/login'
                                                className={({ isActive }) =>
                                                    `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                                }
                                            >
                                                Login
                                            </NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <NavLink
                                                to='/auth/dashboard'
                                                className={({ isActive }) =>
                                                    `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                                }
                                            >
                                                Dashboard
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/'
                                                className={({ isActive }) =>
                                                    `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                                }
                                            >
                                                Logout
                                            </NavLink>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </nav>

                        {/* Mobile Menu Button - hidden on desktop */}
                        <button
                            className="d-lg-none btn border-0 navBtnhover"

                            type="button"
                            onClick={toggleMenu}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    {/* Mobile Menu - shown when menu is open */}
                    <div className={`col-12 d-lg-none ${isMenuOpen ? 'd-block' : 'd-none'}`}>
                        <nav className="py-3">
                            <ul className="list-unstyled d-flex flex-column">
                                <li>
                                    <NavLink
                                        to='/'
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-decoration-none d-block ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/about'
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-decoration-none d-block ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/contact'
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-decoration-none d-block ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/services'
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-decoration-none d-block ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                        }
                                    >
                                        Services
                                    </NavLink>
                                </li>

                                {/* Mobile Auth Links */}
                                <li className="border-top border-light mt-2 pt-2">
                                    {!isAuth ? (
                                        <>
                                            <NavLink
                                                to='/auth/register'
                                                onClick={closeMenu}
                                                className={({ isActive }) =>
                                                    `px-3 py-2 text-decoration-none d-block ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                                }
                                            >
                                                Register
                                            </NavLink>
                                            <NavLink
                                                to='/auth/login'
                                                onClick={closeMenu}
                                                className={({ isActive }) =>
                                                    `px-3 py-2 text-decoration-none d-block ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                                }
                                            >
                                                Login
                                            </NavLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavLink
                                                to='/auth/dashboard'
                                                onClick={closeMenu}
                                                className={({ isActive }) =>
                                                    `px-3 py-2 text-decoration-none d-block ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                                }
                                            >
                                                Dashboard
                                            </NavLink>
                                            <NavLink
                                                to='/'
                                                onClick={closeMenu}
                                                className={({ isActive }) =>
                                                    `px-3 py-2 text-decoration-none d-block ${isActive ? "border-bottom border-3 text-white fw-bold" : "text-white-50"}`
                                                }
                                            >
                                                Logout
                                            </NavLink>
                                        </>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;