import React, { useState } from 'react';
import image from '../../../assets/undraw_sign-in_uva0.svg';
import '../Register/register.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { message } from 'antd';

const initialState = { name: '', email: '', phone: '', password: '', };

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value, }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, password } = user;

        if (!name || !email || !phone || !password) {
            message.error('Please fill out all fields!');
            return;
        }

        message.success(`Welcome ${name}, registration successful!`);

        setUser(initialState);

        // setTimeout(() => {
        //     navigate('/auth/login');
        // }, 1500);
    };

    return (
        <section className='bg-secondary min-vh-100 py-5 d-flex align-items-center justify-content-center flex-column'>
            <div className="container border rounded px-0 " style={{ background: '#848A90' }}>
                <div className="row">
                    <div style={{ minWidth: '10px' }}>
                        <button
                            className="col btn text- fw-bolder p-1 px-3 ms-auto d-flex"
                            style={{ background: '#6C63FF' }}
                            onClick={() => navigate('/')}
                        >
                            X
                        </button>
                    </div>
                </div>

                <div className="register-grid p-3">
                    <div className="image-col">
                        <img src={image} alt="Sign up" className="img-fluid" />
                    </div>

                    <form className="form-col w-100" onSubmit={handleSubmit}>
                        <div className="row g-2">

                            <div className="col-12">
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-12">
                                <input type="password" placeholder="Set your Password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div>
                                <button className="btn w-100" style={{ background: '#6C63FF' }}>Login</button>
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
                            <Link className='text-decoration- text-white fw-bold' to={'/auth/register'}>Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
