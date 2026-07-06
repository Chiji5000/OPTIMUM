import { useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  function validateEmail(value) {
    if (!value) return "Email is required.";
    return "";
  }

  function validatePassword(value) {
    if (!value) return "Password is required.";
    if (value.length < 8) return "Password must be at least 8 characters.";
    return "";
  }

  function handleEmailChange(event) {
    const value = event.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  }

  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);
    setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };
    setErrors(nextErrors);
    setSubmitted(true);

    if (!nextErrors.email && !nextErrors.password) {
      console.log("Admin signing in", { email, password });
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-panel">
        <div className="admin-brand">
          <span className="admin-logo">OPTIMUM</span>
          <p className="admin-tagline">Administrator access portal</p>
        </div>

        <form className="admin-form" onSubmit={handleSubmit} noValidate>
          <div className="admin-field">
            <label htmlFor="adminEmail">Admin email</label>
            <input
              id="adminEmail"
              type="email"
              value={email}
              placeholder="admin@optimum.com"
              onChange={handleEmailChange}
              className={errors.email ? "error" : ""}
              aria-invalid={!!errors.email}
              aria-describedby="adminEmail-error"
            />
            <span id="adminEmail-error" className="admin-error">
              {(submitted || email) && errors.email}
            </span>
          </div>

          <div className="admin-field">
            <label htmlFor="adminPassword">Password</label>
            <input
              id="adminPassword"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              className={errors.password ? "error" : ""}
              aria-invalid={!!errors.password}
              aria-describedby="adminPassword-error"
            />
            <span id="adminPassword-error" className="admin-error">
              {(submitted || password) && errors.password}
            </span>
          </div>

          <button className="admin-submit" type="submit">
            Sign in as admin
          </button>

          <p className="admin-note">
            For customer sign in,{" "}
            <Link to="/account">go to the account page</Link>.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Admin;
