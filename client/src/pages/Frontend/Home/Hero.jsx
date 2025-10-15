import image1 from "../../../assets/undraw_freelancer_vibs.svg"
import image2 from "../../../assets/undraw_mobile-office_w861.svg"

const Hero = () => {
    return (
        <div className="container py-4 text-white">
            <div className="row mx-auto align-items-center text-center text-md-start">
                <div className="col-12 col-md-6">
                    <h3>Welcome this is Umair Saeed</h3>
                    <p className='text-start' style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem non cupiditate
                        laboriosam ipsum voluptas debitis. Doloribus incidunt, aut iusto aspernatur, quisquam
                        nam exercitationem odio optio repellat officiis illum reiciendis!
                    </p>

                    <button className="btn btn-primary mt-2 mb-3">
                        <a href="mailto:umair@example.com" className='text-dark' style={{ textDecoration: 'none' }}>
                            Contact me
                        </a>
                    </button>
                </div>

                <div className="col-12 col-md-6 mx-auto text-center d-flex justify-content-center justify-content-md-end">
                    <img src={image1} className="heroImage" alt="freelancer" />
                </div>
            </div>
            <br /><br /><br />
            <div className="row bg-white text-dark text-center py-4 rounded ">
                <div className="col border-end border-2 border-dark">
                    <h2>
                        50+
                    </h2>
                    <p>Registerd Companies</p>
                </div>
                <div className="col border-end border-2 border-dark"><h2>100,00+</h2>
                    <p>Happy Clients</p></div>
                <div className="col remoove-add-border"><h2>500+</h2><p>
                    Well Know Delvepoler</p></div>
                <div className="col text-capitalize " style={{ marginLeft: "2px " }}><h2>24/7</h2>
                    <p>our service is always for you</p>
                </div>

            </div>
            <div className="row mx-auto align-items-center text-center text-md-start py-5">
                <div className="col-12 col-md-6 mx-auto text-center d-flex justify-content-center justify-content-md-end">
                    <img src={image2} className="heroImage2 img-fluid" alt="freelancer" />
                </div>

                <div className="col-12 col-md-6">
                    <h3>Get Start</h3>
                    <p className='text-start' style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem non cupiditate
                        laboriosam ipsum voluptas debitis. Doloribus incidunt, aut iusto aspernatur, quisquam
                        nam exercitationem odio optio repellat officiis illum reiciendis!
                    </p>

                    <button className="btn btn-primary mt-2 mb-3">
                        <a href="mailto:umair@example.com" className='text-dark' style={{ textDecoration: 'none' }}>
                            Contact me
                        </a>
                    </button>
                </div>

            </div>
        </div>


    );
};

export default Hero;
