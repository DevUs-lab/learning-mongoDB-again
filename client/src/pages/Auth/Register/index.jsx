import React, { useState } from 'react';
import image from '../../../assets/undraw_sign-up_z2ku.svg';
import './register.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios'
const initialState = { userName: '', email: '', phone: '', password: '', };

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value, }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { userName, email, phone, password } = user;



        if (!userName || !email || !phone || !password) {
            message.error('Please fill out all fields!');
            return;
        }


        try {
            const res = await axios.post('http://localhost:9343/api/auth/register', user);

            message.success(`Welcome ${userName}, registration successful!`);

            setUser(initialState);
            // setTimeout(() => navigate('/auth/login'), 1000);

            console.log('Registration Response:', res.data);
        } catch (err) {
            console.error('Registration Error:', err);
            message.error(err.response?.data?.message || 'Registration failed. Try again.');
            if (err.response?.data?.extraDetails) {
                message.error(`Validation error: ${err.response.data.extraDetails}`);
            } else {
                message.error(err.response?.data?.message || 'Registration failed. Try again.');
            }
        }
    };
    // setTimeout(() => {
    //     navigate('/auth/login');
    // }, 1500);


    return (
        <section className='bg-secondary min-vh-100 py-5 d-flex align-items-center justify-content-center flex-column'>
            <div className="container border rounded px-0 " style={{ background: '#848A90' }}>
                <div className="row">
                    <div style={{ minWidth: '10px' }}>
                        <button
                            className="col btn text-white text- fw-bolder p-2 px-3 ms-auto  rounded d-flex"
                            onClick={() => navigate('/')}
                            style={{ background: "#6C63FF" }}
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
                                    autoFocus="true"
                                    type="text"
                                    placeholder="Enter your name"
                                    name="userName"
                                    value={user.userName}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

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
                                <input
                                    type="number"
                                    placeholder="Enter your Phone"
                                    name="phone"
                                    autoComplete='off'
                                    value={user.phone}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-12">
                                <input
                                    type="password"
                                    placeholder="Set your Password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div>
                                <button className="btn w-100" style={{ background: "#6C63FF" }}>Register</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                    </div>
                    <div className="col-md-6 col-12">
                        <p className='d-block w-100 text-center text-white'>
                            Already have an account?{' '}
                            <NavLink className={"text-white fw-bold"} to={'/auth/login'}>Login</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
