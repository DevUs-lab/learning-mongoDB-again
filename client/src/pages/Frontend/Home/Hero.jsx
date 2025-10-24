// import image1 from "../../../assets/undraw_freelancer_vibs.svg"
// import image2 from "../../../assets/undraw_mobile-office_w861.svg"

// const Hero = () => {
//     return (
//         <div className="container py-4 text-white">
//             <div className="row mx-auto align-items-center text-center text-md-start">
//                 <div className="col-12 col-md-6">
//                     <h3>Welcome this is Umair Saeed</h3>
//                     <p className='text-start' style={{ textAlign: "justify" }}>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem non cupiditate
//                         laboriosam ipsum voluptas debitis. Doloribus incidunt, aut iusto aspernatur, quisquam
//                         nam exercitationem odio optio repellat officiis illum reiciendis!
//                     </p>

//                     <button className="btn btn-primary mt-2 mb-3">
//                         <a href="mailto:umair@example.com" className='text-dark' style={{ textDecoration: 'none' }}>
//                             Contact me
//                         </a>
//                     </button>
//                 </div>

//                 <div className="col-12 col-md-6 mx-auto text-center d-flex justify-content-center justify-content-md-end">
//                     <img src={image1} className="heroImage" alt="freelancer" />
//                 </div>
//             </div>
//             <br /><br /><br />
//             <div className="row bg-white text-dark text-center py-4 rounded ">
//                 <div className="col border-end border-2 border-dark">
//                     <h2>
//                         50+
//                     </h2>
//                     <p>Registerd Companies</p>
//                 </div>
//                 <div className="col border-end border-2 border-dark"><h2>100,00+</h2>
//                     <p>Happy Clients</p></div>
//                 <div className="col remoove-add-border"><h2>500+</h2><p>
//                     Well Know Delvepoler</p></div>
//                 <div className="col text-capitalize " style={{ marginLeft: "2px " }}><h2>24/7</h2>
//                     <p>our service is always for you</p>
//                 </div>

//             </div>
//             <div className="row mx-auto align-items-center text-center text-md-start py-5">
//                 <div className="col-12 col-md-6 mx-auto text-center d-flex justify-content-center justify-content-md-end">
//                     <img src={image2} className="heroImage2 img-fluid" alt="freelancer" />
//                 </div>

//                 <div className="col-12 col-md-6">
//                     <h3>Get Start</h3>
//                     <p className='text-start' style={{ textAlign: "justify" }}>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem non cupiditate
//                         laboriosam ipsum voluptas debitis. Doloribus incidunt, aut iusto aspernatur, quisquam
//                         nam exercitationem odio optio repellat officiis illum reiciendis!
//                     </p>

//                     <button className="btn btn-primary mt-2 mb-3">
//                         <a href="mailto:umair@example.com" className='text-dark' style={{ textDecoration: 'none' }}>
//                             Contact me
//                         </a>
//                     </button>
//                 </div>

//             </div>
//         </div>


//     );
// };

// export default Hero;



import image1 from "../../../assets/undraw_freelancer_vibs.svg";
import image2 from "../../../assets/undraw_mobile-office_w861.svg";
import SomethingLikeCard from "../../../components/SomethingLikeCard";

const Hero = () => {
    return (
        <div className="container py-5 text-white">
            {/* First Section */}
            <div className="row align-items-center gy-4">
                <div className="col-12 col-lg-6">
                    <h1 className="fw-bold mb-3">Welcome, I'm Umair Saeed</h1>
                    <p className="lead">
                        I’m a passionate web and mobile app developer who loves turning ideas into real, working projects.
                        I enjoy learning new technologies like React and Firebase, and I’m always improving my coding skills
                        to build clean, modern, and user-friendly applications.
                    </p>
                    <button className="btn btn-primary btn-lg mt-3">
                        <a href="mailto:umair@example.com" className="text-white text-decoration-none">
                            Contact Me
                        </a>
                    </button>
                </div>


                <div className="col-12 col-lg-6 text-center">
                    <img
                        src={image1}
                        className="img-fluid"
                        alt="Freelancer illustration"
                        style={{ maxHeight: "400px" }}
                    />
                </div>
            </div>

            {/* Stats Section */}
            <SomethingLikeCard />

            {/* Second Section */}
            <div className="row align-items-center gy-4 py-5">
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                    <h2 className="fw-bold mb-3">Get Started</h2>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem non cupiditate
                        laboriosam ipsum voluptas debitis. Doloribus incidunt, aut iusto aspernatur, quisquam
                        nam exercitationem odio optio repellat officiis illum reiciendis!
                    </p>
                    <button className="btn btn-primary btn-lg mt-3">
                        <a href="mailto:umair@example.com" className="text-white text-decoration-none">
                            Contact Me
                        </a>
                    </button>
                </div>

                <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
                    <img
                        src={image2}
                        className="img-fluid"
                        alt="Mobile office illustration"
                        style={{ maxHeight: "400px" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;