import { useState } from "react";
import "./login.scss";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP: API call will be added later
    console.log("Login Data:", form);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Healthy Starts Every Single Day</h2>
        <p className="subtitle">Login to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Login</button>

          <div className="links">
            <span>Forgot password?</span>
          </div>
        </form>
      </div>
    </div>
  );
}
