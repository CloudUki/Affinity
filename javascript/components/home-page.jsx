import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {

    const [searchParams] = useSearchParams();
    const [message, setMessage] = useState("");

    useEffect(() => {
        const paramMessage = searchParams.get("message");
        if (paramMessage) {
            setMessage(paramMessage);
        }
    }, [searchParams]);

    return (
        <section id="home-page" style={{ backgroundColor: "transparent" }}> 
            <div className="container mt-5">
                <div className="text-center title">
                    <h1>Welcome to the Home Page</h1>
                    {message && <div className="alert alert-info mt-3">{message}</div>}
                    <p className="mt-4">This is a basic homepage built with React and Bootstrap.</p>
                </div>
            </div>
        </section>
    );
}

export default HomePage;