import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import "react-toastify/dist/ReactToastify.css";
import "../App.css"

import "../App.css"

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const Signup = () => {

    return (
        <div className="login_wrapper">
            <div className="login_left_img" >

            </div>

            <form className="login_form">
                <h2 className="login_title"> Apna Bazza</h2>
                <p> Create Account</p>

                <div style={{ display: 'flex', justifyContent: "space-between", marginTop: "1rem" }}>
                    <span>----------------</span>
                    <>Signup With Email</>
                    <span>----------------</span>
                </div>

                <div className="input_field mt_4">
                    <label htmlFor="">Email Address:</label>
                    <input
                        type="email"
                        name="email"
                    // onChange={handleChange}
                    // value={loginData.email}
                    // required
                    />
                </div>

                <div className="input_field mt_4">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                    // onChange={handleChange}
                    // value={loginData.password}
                    // autoComplete="off"
                    // required
                    />
                </div>

                <div className="mt_4">
                    <ReCAPTCHA
                        style={{ display: "inline-block" }}
                        theme="dark"
                        sitekey={TEST_SITE_KEY}
                    />
                </div>

                <button className="isloading_spinner mt_4">
                    Signup
                </button>

                <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 25 }}>
                    <>---------------------</>
                    <Link to="/login">Or Login</Link>
                    <>---------------------</>
                </div>
            </form>

        </div>
    )
}

export default Signup