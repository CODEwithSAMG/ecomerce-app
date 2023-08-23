import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { TopLoader } from "../UI/TopLoader";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css"

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // await new Promise((resolve) => setTimeout(resolve, 700));
            // // toast.success("Logged in successfully!");
            // setTimeout(() => {
            //     // navigate('/')
            // }, 3000)



            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            })

            console.log(response)

        } catch (error) {
            console.log("An error occurred:", error);
        }
    };

    useEffect(() => {
        <TopLoader />
    }, [])

    return (
        <div className="login_wrapper">
            <div className="login_left_img" />

            <ToastContainer />
            <form className="login_form">
                <h2 className="login_title"> Apna Bazza</h2>
                <p> Welcome Back!</p>

                <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "1rem" }}>
                    <span>-------------</span>
                    <>Login With Email</>
                    <span>-------------</span>
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

                <button className="isloading_spinner mt_4" onClick={handleSubmit}>
                    Login
                </button>

                <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 25 }}>
                    <>-------------</>
                    <Link to="/signup">Or Sign up</Link>
                    <>-------------</>
                </div>

            </form>

        </div>
    );
};

export default Login;
