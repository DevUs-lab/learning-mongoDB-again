import React from 'react';
import image from '../../../assets/undraw_sign-up_z2ku.svg';
import './register.scss'; // make sure you import your CSS file
import { NavLink, useNavigate } from 'react-router-dom';



const Register = () => {

    const Navigate = useNavigate()

    const handleChange = (d) => {
        const { name, value } = d.target
        console.log('name', name)
        console.log('value', value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()



    }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div style={{ minWidth: '10px' }}>
                        <button className="col btn text-danger fw-bolder p-2 px-3 ms-auto bg-secondary rounded d-flex" onClick={() => Navigate("/")}>X</button>
                    </div>
                </div>
                <div className="register-grid">
                    <div className="image-col">
                        <img src={image} alt="Sign up" className="img-fluid" />
                    </div>

                    <form className="form-col w-100" onSubmit={handleSubmit}>
                        <div className='row g-2'>

                            <div className='col-12 '>
                                <input type="text" placeholder="Enter your name" name="name" onChange={(d) => handleChange(d)} className="form-control" />
                            </div>
                            <div className='col-12 '>

                                <input type="text" placeholder="Enter your Email" name="email" onChange={(d) => handleChange(d)} className="form-control" />
                            </div>
                            <div className='col-12 '>

                                <input type="text" placeholder="Enter your Phone" name="phone" onChange={(d) => handleChange(d)} className="form-control" />
                            </div>
                            <div className='col-12 '>

                                <input type="text" placeholder="Set your Password" name="password" onChange={(d) => handleChange(d)} className="form-control" />
                            </div>
                            <div>
                                <button className='btn btn-secondary'>Register</button>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
            <div className="row">

                <div className='col-md-4 offset-md-8 col-12 text-center text-md-start'>
                    <p>Already have an <NavLink to={'/auth/login'}>acount</NavLink> </p>
                </div>
            </div>
        </>
    );
};

export default Register;
