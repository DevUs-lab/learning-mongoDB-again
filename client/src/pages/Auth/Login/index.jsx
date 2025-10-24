import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';
import image from '../../../assets/undraw_sign-in_uva0.svg';
import '../Register/register.scss';

const initialState = { email: '', password: '' };

const Login = () => {
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

        const trimmedUser = {
            email: user.email?.trim() || '',
            password: user.password?.trim() || ''
        };

        const { email, password } = trimmedUser;

        // Validation
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
            const res = await axios.post('http://localhost:9343/api/auth/login', trimmedUser);

            console.log('Backend Response:', res.data);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.userId);
            localStorage.setItem('userEmail', email);

            if (res.data.userName) {
                localStorage.setItem('userName', res.data.userName);
            }

            message.success(res.data.message || 'Login successful!');

            setUser(initialState);
            setIsLoading(false);
            setTimeout(() => navigate('/'), 1000);
        } catch (err) {
            console.error('Login Error:', err);

            const backendMessage = err.response?.data?.message;
            const validationDetails = err.response?.data?.extraDetails;

            if (validationDetails) {
                message.error(`Validation error: ${validationDetails}`);
            } else if (backendMessage) {
                message.error(backendMessage);
            } else {
                message.error('Something went wrong. Try again.');
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
                            className="col btn fw-bolder p-2 text-white px-3 ms-auto d-flex"
                            style={{ background: '#6C63FF' }}
                            onClick={() => {
                                if (location.pathname !== '/auth/login') {
                                    navigate(-1);
                                } else {
                                    navigate('/');
                                }
                            }}
                        >
                            X
                        </button>
                    </div>
                </div>

                {/* Login Form */}
                <div className="register-grid p-3">
                    <div className="image-col">
                        <img src={image} alt="Sign in" className="img-fluid" />
                    </div>

                    <form className="form-col w-100" onSubmit={handleSubmit}>
                        <div className="row g-2">
                            <div className="col-12 text-start">
                                <label htmlFor="email" className='mb-1'>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your Email"
                                    name="email"
                                    autoFocus
                                    value={user.email}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-12 text-start mt-2">
                                <label htmlFor="password" className='mb-1'>Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your Password"
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
                                        background: '#6C63FF',
                                        color: 'white',
                                        fontSize: '17px',
                                        opacity: isLoading ? 0.7 : 1
                                    }}
                                >
                                    {isLoading ? 'Logging in...' : 'Login'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Bottom Section */}
                <div className="row mt-3">
                    <div className="col-12">
                        <p className='text-center text-white'>
                            Create new account?{' '}
                            <Link className='text-white fw-bold text-decoration-none' to='/auth/register'>
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
