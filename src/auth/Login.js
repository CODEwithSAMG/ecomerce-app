import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import "react-toastify/dist/ReactToastify.css";
import "./auth.css"

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const Login = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            let token;
            if (response.statusText === "OK") {
                const data = await response.json();
                token = data.token;
            }


            if (token) {
                localStorage.setItem("token", token)
                toast.success("Logged in successfully!");
                navigate("/")
                // }
            } else {
                toast.error("invalid credentials")
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="login_wrapper">
            <div className="login_left_img" />

            <ToastContainer />

            <form className="login_form">
                <h2 className="login_title"> Apna Bazza</h2>
                <p> Welcome Back!</p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <GoogleOAuthProvider clientId="848713887451-2hv3ch1sp6e0qreoq6ir6pukasck1git.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>
                </div>

                <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "1rem" }}>
                    <span>-----</span>
                    Or Login With Email
                    <span>-----</span>
                </div>

                <div className="input_field mt_4">
                    <label htmlFor="">Email Address:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email Adress"
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
                        placeholder="Enter your Password"
                        onChange={handleChange}
                        value={loginData.password}
                        required
                    />
                </div>

                <div style={{ margin: "1.3rem 0" }}>
                    <ReCAPTCHA
                        // theme="dark"
                        sitekey={TEST_SITE_KEY}
                    />
                </div>

                <button className="isloading_spinner mt_4" onClick={handleSubmit}>
                    Login
                </button>


                <div className="already_account">
                    <p>Dont have account?</p>
                    <Link to="/signup"><p>SIGN UP</p></Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
