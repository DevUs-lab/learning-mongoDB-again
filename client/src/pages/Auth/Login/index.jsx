import React, { useState } from 'react';
import image from '../../../assets/undraw_sign-in_uva0.svg';
import '../Register/register.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';

const initialState = { email: '', password: '' };

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        const { email, password } = user;

        if (!email || !password) {
            message.error('Please fill out all fields!');
            setIsLoading(false);

            return;
        }

        try {
            const res = await axios.post('http://localhost:9343/api/auth/login', user);

            console.log('Backend Response:', res.data);

            if (res.data.message) {
                message.success(res.data.message);
            } else {
                message.success('Login successful!');
            }

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.userId);

            localStorage.setItem('userEmail', email);

            setUser(initialState);

            setTimeout(() => navigate('/'), 1000);

            setIsLoading(false)

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
        }
        setIsLoading(false)

    };

    return (
        <section className='bg-secondary min-vh-100 py-5 d-flex align-items-center justify-content-center flex-column'>
            <div className="container border rounded px-0 " style={{ background: '#848A90' }}>
                <div className="row">
                    <div style={{ minWidth: '10px' }}>
                        <button
                            className="col btn text- fw-bolder p-2 text-white px-3 ms-auto d-flex"
                            style={{ background: '#6C63FF' }}
                            onClick={() => navigate('/')}
                        >
                            X
                        </button>
                    </div>
                </div>

                <div className="register-grid p-3">
                    <div className="image-col">
                        <img src={image} alt="Sign in" className="img-fluid" />
                    </div>

                    <form className="form-col w-100" onSubmit={handleSubmit}>
                        <div className="row g-2">
                            <div className="col-12">
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    name="email"
                                    autoFocus
                                    value={user.email}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-12">
                                <input
                                    type="password"
                                    placeholder="Enter your Password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div>
                                <button className="btn w-100" loading={isLoading} style={{ background: '#6C63FF' }}>
                                    {isLoading ? 'Logging in...' : 'Login'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                    </div>
                    <div className="col-md-6 col-12">
                        <p className='d-block w-100 text-center text-white'>
                            Create new account?{' '}
                            <Link className='text-decoration- text-white fw-bold' to={'/auth/register'}>
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;