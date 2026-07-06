import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  function validateEmail(value) {
    if (!value) return "Email is required.";
    if (!emailRegex.test(value)) return "Enter a valid email address.";
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
      console.log("Signing in", { email, password });
    }
  }

  const emailValid = email && !errors.email;
  const passwordValid = password && !errors.password;

  return (
    <div className="signin-page">
      <div className="signin-bg" aria-hidden>
        <span className="signin-glow glow-1" />
        <span className="signin-glow glow-2" />
        <span className="signin-glow glow-3" />
      </div>

      <div className="signin-card">
        <div className="signin-header">
          <p className="signin-eyebrow">Welcome back</p>
          <h1>Sign in to continue.</h1>
          <p className="signin-subtitle">
            Access your account, view orders, and keep your cart ready to check
            out.
          </p>
        </div>

        <form className="signin-form" onSubmit={handleSubmit} noValidate>
          <div className="signin-field">
            <label className="signin-label" htmlFor="loginEmail">
              Email address
            </label>
            <div className="signin-input-group">
              <input
                id="loginEmail"
                type="email"
                value={email}
                placeholder="you@example.com"
                onChange={handleEmailChange}
                className={`signin-input ${errors.email ? "error" : ""}`}
                aria-invalid={!!errors.email}
                aria-describedby="loginEmail-error"
              />
              {(email || submitted) && (
                <span
                  className={`signin-validation-icon ${emailValid ? "valid" : "invalid"}`}
                >
                  {emailValid ? "✓" : "✕"}
                </span>
              )}
            </div>
            <span id="loginEmail-error" className="signin-error">
              {(submitted || email) && errors.email}
            </span>
          </div>

          <div className="signin-field">
            <label className="signin-label" htmlFor="loginPassword">
              Password
            </label>
            <div className="signin-input-group">
              <input
                id="loginPassword"
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={handlePasswordChange}
                className={`signin-input ${errors.password ? "error" : ""}`}
                aria-invalid={!!errors.password}
                aria-describedby="loginPassword-error"
              />
              {(password || submitted) && (
                <span
                  className={`signin-validation-icon ${passwordValid ? "valid" : "invalid"}`}
                >
                  {passwordValid ? "✓" : "✕"}
                </span>
              )}
            </div>
            <span id="loginPassword-error" className="signin-error">
              {(submitted || password) && errors.password}
            </span>
          </div>

          <button className="signin-submit" type="submit">
            Sign in
          </button>

          <div className="signin-footer">
            <p>
              New here? <Link to="/signup">Create an account</Link>
            </p>
            <p>
              <Link to="/forgot-password">Forgot password?</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
