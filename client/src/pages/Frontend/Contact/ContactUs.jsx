import React, { useState } from 'react';
import EmailImage from '../../../assets/undraw_opened_47gd.svg';
import axios from 'axios'
import './contactscss.scss'
import { message, Spin } from 'antd'



const initialState = {
    name: localStorage.getItem("userName") || '',
    email: localStorage.getItem('userEmail') || '',
    message: ''
}
const isloggedIn = !!localStorage.getItem('userName') && localStorage.getItem('userEmail')


const ContactUs = () => {
    // const { user } = useUser()

    // const initialState = {
    //     name: user?.userName || '',
    //     email: user?.email || '',
    //     message: ''
    // }

    // const isloggedIn = !!user

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        setIsLoading(true)

        e.preventDefault();
        console.log(formData);

        const trimmedData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
        };

        if (!trimmedData.name || trimmedData.name.length < 2) {
            message.error("Please enter a valid name (at least 2 characters).");
            setIsLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!trimmedData.email || !emailRegex.test(trimmedData.email)) {
            message.error("Please enter a valid email address.");
            setIsLoading(false);
            return;
        }

        if (!trimmedData.message || trimmedData.message.length < 5) {
            message.error("Please type your message correctly (at least 5 characters).");
            setIsLoading(false);
            return;
        }

        try {
            const { name } = formData
            const res = await axios.post('http://localhost:9343/api/form/contact', trimmedData);

            message.success(`Thanks ${name}, for messaging us!`);


            setFormData(initialState);
            setIsLoading(false);

            console.log('Registration Response:', res.data);

        } catch (err) {
            console.error('Error:', err);

            if (err.response?.data?.extraDetails) {
                message.error(`error: ${err.response.data.extraDetails}.`);
            } else {
                message.error(err.response?.data?.message || 'Registration failed. Try again.');
            }

            setIsLoading(false);
        }

    };

    return (
        <section className="py-5">
            <div className="container">
                <div className="row mb-4 text-center">
                    <div className="col">
                        <h1>Contact Us</h1>
                        <p className="text-white ">Feel free to reach out — I’ll get back to you soon.</p>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center shadow rounded p-5 border">
                    <div className="col-12 col-md-6 mb-5 mb-md-0 text-center">
                        <img
                            src={EmailImage}
                            alt="Email Illustration"
                            className="img-fluid mx-auto d-block"
                            style={{ maxWidth: '70%' }}
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <form onSubmit={handleSubmit} className="mx-auto " style={{ maxWidth: '450px' }}>
                            <div className="mb-2">
                                <label htmlFor="name" className="form-label mb-1">Name</label>
                                <input
                                    type="text"
                                    autoFocus
                                    className="form-control"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={isloggedIn}
                                />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="email" className="form-label mb-1">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    value={formData.email}
                                    disabled={isloggedIn}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="message" className="form-label mb-1">Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows="4"
                                    placeholder="Write your message"
                                    required
                                    value={formData.message}
                                    autoFocus
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className='w-100 mx-auto'>

                                <button className="btn text-white" disabled={isLoading} style={{ background: '#6C63FF', minWidth: '30%' }}>
                                    {isLoading ? <>
                                        <Spin size="small" /> Submitting...
                                    </> : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
