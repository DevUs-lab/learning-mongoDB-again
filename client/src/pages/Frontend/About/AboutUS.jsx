import React from 'react'
import aboutImage from '../../../assets/undraw_team_85hs.svg'
import SomethingLikeCard from '../../../components/SomethingLikeCard'
const AboutUS = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row mx-auto align-items-center text-centr text-start">
                    <div className="col-12 col-md-6">
                        <p className='mb-0'>Welcome To My Website</p>
                        <h2>
                            Why Choose Us?
                        </h2>
                        <p>Experrise:Our team consists of experienced IT professionals who are passionate about staying up-to-date whith the lastest industry friends.</p>
                        <p>Customization: We understand that every business is unique. That's why we create solutions that are fallored to your specific needs and goals.</p>
                        <p>Customer-Centric Appreach: We prioritize your sofisfaction and provide top-notch support to address you IT concerns.</p>
                        <p>Affardobillity: We affer competitive pricing without compromising on the quailty of our services.</p>
                        <p>Reliabilty: Count on us to be there when you need us, We're committed to ensuring Your IT environment is relable and available 24/7</p>
                        <button><a href="mailto:qwerty@gmail.com"></a></button>

                    </div>
                    <div className="col-12 col-md-6  mx-auto text-center d-flex justify-content-center justify-content-md-end">
                        <img src={aboutImage} className='img-fluid aboutImage' alt="about page image" />
                    </div>
                </div>
                <SomethingLikeCard />
            </div>
        </div>
    )
}

export default AboutUS