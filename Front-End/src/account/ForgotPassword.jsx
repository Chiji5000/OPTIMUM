import { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function validateEmail(value) {
    if (!value) return "Email is required.";
    if (!emailRegex.test(value)) return "Enter a valid email address.";
    return "";
  }

  function handleEmailChange(event) {
    const value = event.target.value;
    setEmail(value);
    setError(validateEmail(value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextError = validateEmail(email);
    setError(nextError);
    setSubmitted(true);

    if (!nextError) {
      console.log("Sending recovery email to", email);
    }
  }

  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <div className="forgot-header">
          <p className="forgot-eyebrow">Password recovery</p>
          <h1>Forgot your password?</h1>
          <p className="forgot-subtitle">
            Enter your email and we’ll send a secure reset link right away.
          </p>
        </div>

        <form className="forgot-form" onSubmit={handleSubmit} noValidate>
          <label className="forgot-label" htmlFor="recoveryEmail">
            Email address
          </label>
          <input
            id="recoveryEmail"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={handleEmailChange}
            className={`forgot-input ${error ? "error" : ""}`}
            aria-invalid={!!error}
            aria-describedby="recovery-error"
          />
          <span id="recovery-error" className="forgot-error">
            {(submitted || email) && error}
          </span>

          <button className="forgot-submit" type="submit">
            Send recovery email
          </button>

          <p className="forgot-footer">
            Remembered your password? <Link to="/account">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
