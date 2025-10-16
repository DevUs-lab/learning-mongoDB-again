import React from 'react'

const SomethingLikeCard = () => {
    return (
        <div className="row bg-white text-dark text-center py-5 rounded my-5 mx-0" style={{ color: "#6C757D" }}>
            <div className="col-6 col-md-3 border-end border-dark" style={{ color: "#6C757D" }}>
                <h2 className="fw-bold ">50+</h2>
                <p className="mb-0">Registered Companies</p>
            </div>
            <div className="col-6 col-md-3 border-end border-dark" style={{ color: "#6C757D" }}>
                <h2 className="fw-bold ">100+</h2>
                <p className="mb-0">Happy Clients</p>
            </div>
            <div className="col-6 col-md-3 border-end border-dark mt-3 mt-md-0" style={{ color: "#6C757D" }}>
                <h2 className="fw-bold ">500+</h2>
                <p className="mb-0">Well Known Developers</p>
            </div>
            <div className="col-6 col-md-3 mt-3 mt-md-0" style={{ color: "#6C757D" }}>
                <h2 className="fw-bold ">24/7</h2>
                <p className="mb-0">Always Available Service</p>
            </div>
        </div>
    )
}

export default SomethingLikeCard