import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <section className="notfound d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
            <h1 className="display-1 fw-bold text-danger animate-bounce">404</h1>
            <h2 className="mb-3 text-dark fw-semibold">Oops! Page Not Found</h2>
            <p className="text-muted mb-4">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <div className="d-flex gap-3">
                <button
                    className="btn btn-outline-secondary px-4"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
                <button
                    className="btn btn-primary px-4"
                    onClick={() => navigate("/contact")}
                >
                    Report It
                </button>
            </div>
        </section>
    );
};

export default PageNotFound;
