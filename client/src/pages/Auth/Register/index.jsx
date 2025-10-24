import React, { useState } from 'react';
import image from '../../../assets/undraw_sign-up_z2ku.svg';
import './register.scss';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';

const initialState = { userName: '', email: '', phone: '', password: '' };

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        let { userName, email, phone, password } = user;

        // Trim values
        userName = userName?.trim() || '';
        email = email?.trim() || '';
        phone = phone?.trim() || '';
        password = password?.trim() || '';

        // Validation
        if (!userName) {
            message.error("Name is required");
            setIsLoading(false);
            return;
        }
        if (userName.length < 3) {
            message.error("Name must be at least 3 characters long");
            setIsLoading(false);
            return;
        }
        if (userName.length > 25) {
            message.error("Name must not exceed 25 characters");
            setIsLoading(false);
            return;
        }
        if (!email) {
            message.error("Email is required");
            setIsLoading(false);
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            message.error("Please enter a valid email address");
            setIsLoading(false);
            return;
        }
        if (!phone) {
            message.error("Please enter your mobile number");
            setIsLoading(false);
            return;
        }
        if (phone.length < 10) {
            message.error("Please enter a valid mobile number (at least 10 digits)");
            setIsLoading(false);
            return;
        }
        if (!password) {
            message.error("Password is required!");
            setIsLoading(false);
            return;
        }
        if (password.length < 6) {
            message.error("Password must be at least 6 characters");
            setIsLoading(false);
            return;
        }

        try {
            const trimmedUser = { userName, email, phone, password };
            const res = await axios.post('http://localhost:9343/api/auth/register', trimmedUser);

            message.success(`Welcome ${userName}, registration successful!`);

            setUser(initialState);
            setIsLoading(false);

            console.log('Registration Response:', res.data);

            setTimeout(() => navigate('/auth/login'), 1000);
        } catch (err) {
            console.error('Registration Error:', err);

            if (err.response?.data?.extraDetails) {
                message.error(`Validation error: ${err.response.data.extraDetails}`);
            } else {
                message.error(err.response?.data?.message || 'Registration failed. Try again.');
            }

            setIsLoading(false);
        }
    };

    return (
        <section className='bg-secondary min-vh-100 py-5 d-flex align-items-center justify-content-center flex-column'>
            <div className="container border rounded px-0" style={{ background: '#848A90' }}>
                {/* Close Button */}
                <div className="row">
                    <div style={{ minWidth: '10px' }}>
                        <button
                            type="button"
                            className="col btn text-white fw-bolder p-2 px-3 ms-auto rounded d-flex"
                            style={{ background: "#6C63FF" }}
                            onClick={() => {
                                if (location.pathname === '/auth/register') {
                                    navigate('/');
                                } else {
                                    navigate(-1);
                                }
                            }}
                        >
                            X
                        </button>
                    </div>
                </div>

                {/* Register Form */}
                <div className="register-grid p-3">
                    <div className="image-col">
                        <img src={image} alt="Sign up" className="img-fluid" />
                    </div>

                    <form className="form-col w-100" onSubmit={handleSubmit}>
                        <div className="row g-2">
                            <div className="col-12 text-start">
                                <label htmlFor="userName" className='mb-1'>Name</label>
                                <input
                                    type="text"
                                    id="userName"
                                    placeholder="Enter your name"
                                    name="userName"
                                    value={user.userName}
                                    onChange={handleChange}
                                    autoFocus={true}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-12 text-start">
                                <label htmlFor="email" className='mb-1'>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your Email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-12 text-start">
                                <label htmlFor="phone" className='mb-1'>Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter your Phone"
                                    name="phone"
                                    autoComplete='off'
                                    value={user.phone}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-12 text-start">
                                <label htmlFor="password" className='mb-1'>Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Set your Password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className='mt-4'>
                                <button
                                    type="submit"
                                    className="btn w-100"
                                    disabled={isLoading}
                                    style={{
                                        color: 'white',
                                        fontSize: '17px',
                                        background: '#6C63FF',
                                        opacity: isLoading ? 0.7 : 1
                                    }}
                                >
                                    {isLoading ? "Registering..." : 'Register'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Bottom Section */}
                <div className="row mt-3">
                    <div className="col-12">
                        <p className='text-center text-white'>
                            Already have an account?{' '}
                            <NavLink className="text-white fw-bold text-decoration-none" to='/auth/login'>Login</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
