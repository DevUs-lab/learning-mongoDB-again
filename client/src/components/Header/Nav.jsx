import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const isAuth = true

    return (
        <div style={{ background: "#1F1F1F" }}>

            <div className="container navbar-dark text-white">

                <div className="row">
                    <div className="col d-flex align-items-center justify-content-between m-0 p-3 mt-1">
                        <h3>
                            <NavLink to='/' className="text-decoration-none text-dark text-white fw-bold">

                                Logo
                            </NavLink>
                        </h3>
                        <nav>
                            <ul className='list-unstyled d-flex'>
                                <li>
                                    <NavLink
                                        to='/'
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white" : "text-white-50"}`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/about'
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white" : "text-white-50"}`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/contact'
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white" : "text-white-50"}`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/services'
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white" : "text-white-50"}`
                                        }
                                    >
                                        Services
                                    </NavLink>
                                </li>
                                <li>
                                    {isAuth ?
                                        <NavLink
                                            to='/auth/register'
                                            className={({ isActive }) =>
                                                `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white" : "text-white-50"}`
                                            }
                                        >
                                            Register
                                        </NavLink>
                                        : <NavLink
                                            to='/auth/login'
                                            className={({ isActive }) =>
                                                `px-3 py-2 text-decoration-none ${isActive ? "border-bottom border-3 text-white" : "text-white-50"}`
                                            }
                                        >
                                            Login
                                        </NavLink>
                                    }
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;



// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Nav = () => {
//     return (
//         <div style={{ background: "#1F1F1F" }}>
//             <div className="container navbar-dark text-white">
//                 <div className="row">
//                     <div className="col d-flex align-items-center justify-content-between p-3">

//                         <h3>
//                             <NavLink to='/' className="text-decoration-none text-white fw-bold">
//                                 Logo
//                             </NavLink>
//                         </h3>

//                         <nav>
//                             <ul className='list-unstyled d-flex mb-0'>
//                                 {[
//                                     { to: "/", label: "Home" },
//                                     { to: "/about", label: "About" },
//                                     { to: "/contact", label: "Contact" },
//                                     { to: "/services", label: "Services" },
//                                     { to: "/register", label: "Register" }
//                                 ].map(({ to, label }) => (
//                                     <li key={to}>
//                                         <NavLink
//                                             to={to}
//                                             className={({ isActive }) =>
//                                                 `px-3 py-2 text-decoration-none ${isActive
//                                                     ? "border-bottom border-3 border-primary text-white"
//                                                     : "text-white-50"}`
//                                             }
//                                         >
//                                             {label}
//                                         </NavLink>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </nav>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Nav;
