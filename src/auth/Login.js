import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

import "react-toastify/dist/ReactToastify.css";
import "./auth.css"

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const Login = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [LoginButton, setLoginButton] = useState();

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
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            })
            // console.log(response)
            // if (response) {

            //     toast.success("Logged in successfully!");
            //     setTimeout(() => {
            //         Navigate('/')
            //     }, 3000)
            //     console.log("if statment")
            // }
            let token;
            if (response.ok) {
                const data = await response.json();
                token = data.token;
                console.log(token, "res");
            }
            console.log(token)
            if (token) {
                navigate('/'); // If using React Router
                console.log("fjdklj")
            } else {
                toast.success("Logged in successfully!");
                // Redirect the user to a dashboard or home page after successful login.
                // history.push('/dashboard'); // If using React Router
                // Navigate('/dashboard'); // If using React Query Navigator
            }

        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    // if (token) {
    //     setLoginButton("false")
    // }

    return (
        <div className="login_wrapper">
            <div className="login_left_img" />

            <ToastContainer />

            <div>

                <form className="login_form">
                    <h2 className="login_title"> Apna Bazza</h2>
                    <p> Welcome Back!</p>

                    <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "1rem" }}>
                        <span>-------</span>
                        Login With Email
                        <span>-------</span>
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

                    <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 25 }}>
                        <span>-------</span>
                        <Link to="/signup">Or Sign up</Link>
                        <span>-------</span>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Login;
