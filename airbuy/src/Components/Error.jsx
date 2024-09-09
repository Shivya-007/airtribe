import React from "react";
import error from "../assets/images/error.png";
import "./error.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    document.title = "404! Page not found"

    return (
        <>
            <div className="error-page">
                <p className="big-error">404</p>
                <p className="medium-error">Something went</p>
                <p className="wrong">WRONG!</p>
                <button
                    onClick={() => {
                        navigate("/");
                    }}
                    className="back-home"
                >
                    Back to Homepage
                </button>
            </div>
        </>
    );
}

export default Error;
