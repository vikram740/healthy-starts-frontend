import { useState } from "react";
import "./login.css";
import VerifyOtp from "../verifyOtp/verifyOtp";

const loginInitialState = {
  username: "",
  password: "",
};

const registerInitialState = {
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const otpInitialState = {
  otp: "",
};

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const [authStep, setAuthStep] = useState("form");
  const [loginForm, setLoginForm] = useState(loginInitialState);
  const [registerForm, setRegisterForm] = useState(registerInitialState);
  const [otpForm, setOtpForm] = useState(otpInitialState);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setAuthStep("form");
  };

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e) => {
    setOtpForm({ ...otpForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeTab === "login") {
      console.log("Login Data:", loginForm);
      return;
    }

    if (authStep === "form") {
      console.log("Register Data:", registerForm);
      setAuthStep("otp");
      return;
    }

    console.log("OTP Submitted:", otpForm);
  };

  return (
    <div className="login-container">
      <div className="auth-card">
        <div className="card-image" aria-hidden="true" />

        <div className="card-form-panel">
          <h2>Fresh salads, delivered daily.</h2>

          {authStep === "form" && (
            <div className="toggle-buttons" role="tablist" aria-label="Authentication mode">
              <button
                type="button"
                role="tab"
                className={activeTab === "login" ? "active" : ""}
                aria-selected={activeTab === "login"}
                onClick={() => handleTabChange("login")}
              >
                Login
              </button>
              <button
                type="button"
                role="tab"
                className={activeTab === "register" ? "active" : ""}
                aria-selected={activeTab === "register"}
                onClick={() => handleTabChange("register")}
              >
                Register
              </button>
            </div>
          )}

          <h3>
            {activeTab === "login" ? "Login" : authStep === "otp" ? "Verify OTP" : "Create Account"}
          </h3>

          <form onSubmit={handleSubmit}>
            {activeTab === "login" ? (
              <>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={loginForm.username}
                    onChange={handleLoginChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="login-password">Password</label>
                  <input
                    id="login-password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
              </>
            ) : authStep === "otp" ? (
              <VerifyOtp otp={otpForm.otp} onOtpChange={handleOtpChange} />
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    value={registerForm.name}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={registerForm.phone}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={registerForm.email}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="register-password">Password</label>
                  <input
                    id="register-password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={registerForm.password}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    id="confirm-password"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={registerForm.confirmPassword}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
              </>
            )}

            <button type="submit" className="submit-btn">
              {activeTab === "login" ? "Login" : authStep === "otp" ? "Submit OTP" : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
