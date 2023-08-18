import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginSpinner } from "../UI/LoginSPinner";
import ReCAPTCHA from "react-google-recaptcha";

import "../App.css"

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState(false); // Initialize isLoading state
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 700));
            setIsLoading(false);
            toast.success("Logged in successfully!");
            setTimeout(() => {
                navigate('/')
            }, 3000)

        } catch (error) {
            setIsLoading(false);
            console.error("An error occurred:", error);
            toast.error("An error occurred. Please try again later.");
        }
    };

    function onChange (value) {
        console.log("Captcha value:", value);
    }

    return (
        <div className="login_wrapper">
            {/* <div > */}
            <div className="login_left_img" />

            <form className="login_form">
                <h2 className="login_title"> Apna Bazza</h2>
                <p> Welcome Back!</p>

                <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "1rem" }}>
                    <span>----------------</span>
                    <>Login With Email</>
                    <span>----------------</span>
                </div>

                <div className="input_field mt_4">
                    <label htmlFor="">Email Address:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={loginData.email}
                        required
                    />
                </div>

                <div className="input_field mt_4">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={loginData.password}
                        autoComplete="off"
                        required
                    />
                </div>

                <div className="mt_4">
                    <ReCAPTCHA
                        style={{ display: "inline-block" }}
                        theme="dark"
                        sitekey={TEST_SITE_KEY}
                    />
                </div>

                <button className="isloading_spinner mt_4" onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? <><LoginSpinner /> Login </> : "Login"}
                </button>

                <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 25 }}>
                    <>---------------------</>
                    <Link to="/">Or Sign up</Link>
                    <>---------------------</>
                </div>

                <ToastContainer />
            </form>

        </div>
    );
};

export default Login;
