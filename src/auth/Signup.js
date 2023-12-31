import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CircularSpinner } from "../UI/LoadingSpinner";
import { TopLoader } from "../UI/TopLoader";

import "react-toastify/dist/ReactToastify.css";
import "./auth.css";

const Signup = () => {
  const [emailError, setEmailError] = useState("");
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false);

  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailError(isValidEmail ? "" : "Invalid email format");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        toast.success("Registered successfully! Redirectign to Login Page");
        setIsLoading(true)
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else if (response.status === 400) {
        toast.warning("user already registered.");
      } else {
        toast.error("something went wrong");
      }

    } catch {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    setProgress(100)
  }, [])

  return (
    <div className="login_wrapper">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnHover
      />
      <TopLoader progress={progress} setProgress={setProgress} />
      <div className="login_left_img" />

      <form className="login_form">
        <h1 className="login_title"> Apna Bazza</h1>
        <p> Create Account</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <span>------------</span>
          <>Signup With Email</>
          <span>------------</span>
        </div>

        <div className="input_field mt_4">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            name="email"
            id="email"
            aria-labelledby="email"
            onChange={handleChange}
            value={registrationData.email}
            required
          />

          {emailError && (
            <p className="error red">Please input correct email</p>
          )}
        </div>

        <div className="input_field mt_4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            aria-labelledby="password"
            onChange={handleChange}
            value={registrationData.password}
            required
          />
        </div>

        <button
          type="button"
          className={`isloading_spinner  {
                                ${isLoading ? "loading" : ""}`}
          onClick={handleSignup}
          disabled={isLoading}
        >
          {isLoading ? <>SIGNING UP {<CircularSpinner />}</> : "Sign Up"}
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <>---------------</>
          <Link to="/login">Or Login</Link>
          <>---------------</>
        </div>
      </form>
    </div>
  );
};

export default Signup;
