import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  function validateEmail(value) {
    if (!value) return "Email is required.";
    if (!emailRegex.test(value)) return "Enter a valid email address.";
    return "";
  }

  function validatePassword(value) {
    if (!value) return "Password is required.";
    if (!passwordRegex.test(value))
      return "Password must be 8+ chars, include uppercase, lowercase, and a number.";
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
      // placeholder for form submission
      console.log("Signing in", { email, password, remember });
    }
  }

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
          <h1>Sign in to your account</h1>
          <p className="signin-subtitle">
            Enter your details below to access your dashboard and shopping.
          </p>
        </div>

        <form className="signin-form" onSubmit={handleSubmit} noValidate>
          <label className="signin-label">
            Email address
            <div className="signin-input-group">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={handleEmailChange}
                className={`signin-input ${errors.email ? "error" : ""}`}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {(email || submitted) && (
                <span
                  className={`signin-validation-icon ${
                    isEmailValid ? "valid" : "invalid"
                  }`}
                >
                  {isEmailValid ? "✓" : "✕"}
                </span>
              )}
            </div>
            <span id="email-error" className="signin-error">
              {(submitted || email) && errors.email}
            </span>
          </label>

          <label className="signin-label">
            Password
            <div className="signin-input-group signin-password-row">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className={`signin-input ${errors.password ? "error" : ""}`}
                aria-invalid={!!errors.password}
                aria-describedby="password-error"
              />
              <button
                type="button"
                className="signin-password-toggle"
                onClick={() => setShowPassword((value) => !value)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              {(password || submitted) && (
                <span
                  className={`signin-validation-icon ${
                    isPasswordValid ? "valid" : "invalid"
                  }`}
                >
                  {isPasswordValid ? "✓" : "✕"}
                </span>
              )}
            </div>
            <span id="password-error" className="signin-error">
              {(submitted || password) && errors.password}
            </span>
          </label>

          <div className="signin-actions">
            <label className="signin-remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="signin-forgot">
              Forgot password?
            </Link>
          </div>

          <button className="signin-submit" type="submit">
            Sign in
          </button>

          <p className="signin-footer">
            New here? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
