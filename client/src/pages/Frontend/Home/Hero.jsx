import React from 'react'
import image from "../../../assets/undraw_freelancer_vibs.svg"

const Hero = () => {
    return (
        <div className="container py-4 text-white">
            <div className="row mx-auto align-items-center text-center text-md-start ">
                <div className="col-12 col-md-6">
                    <h3>Welcome this is Umair Saeed</h3>
                    <p className='text-start' style={{ alignItems: "justify" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem non cupiditate laboriosam ipsum voluptas debitis. Doloribus incidunt, aut iusto aspernatur, quisquam nam exercitationem odio optio repellat officiis illum reiciendis!
                    </p>
                </div>
                <div className="col-12 col-md-6 mx-auto text-center d-flex justify-content-center justify-content-md-end"><img src={image} className='heroImage' alt="freelancer" /></div>
            </div>
        </div>
    )
}

export default Hero