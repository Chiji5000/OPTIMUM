import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const nameRegex = /^[A-Za-z][A-Za-z '-]{1,}$/;

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const isFullNameValid = nameRegex.test(fullName);
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);
  const isConfirmPasswordValid =
    confirmPassword && confirmPassword === password;

  function validateFullName(value) {
    if (!value) return "Full name is required.";
    if (!nameRegex.test(value)) return "Please enter a valid name.";
    return "";
  }

  function validateEmail(value) {
    if (!value) return "Email is required.";
    if (!emailRegex.test(value)) return "Enter a valid email address.";
    return "";
  }

  function validatePassword(value) {
    if (!value) return "Password is required.";
    if (!passwordRegex.test(value))
      return "Password must be 8+ chars and include upper, lower, and a number.";
    return "";
  }

  function validateConfirmPassword(value) {
    if (!value) return "Please confirm your password.";
    if (value !== password) return "Passwords do not match.";
    return "";
  }

  function handleFullNameChange(event) {
    const value = event.target.value;
    setFullName(value);
    setErrors((prev) => ({ ...prev, fullName: validateFullName(value) }));
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

  function handleConfirmPasswordChange(event) {
    const value = event.target.value;
    setConfirmPassword(value);
    setErrors((prev) => ({
      ...prev,
      confirmPassword: validateConfirmPassword(value),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {
      fullName: validateFullName(fullName),
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(confirmPassword),
      acceptedTerms: acceptedTerms ? "" : "You must agree to the terms.",
    };

    setErrors(nextErrors);
    setSubmitted(true);

    if (
      !nextErrors.fullName &&
      !nextErrors.email &&
      !nextErrors.password &&
      !nextErrors.confirmPassword &&
      !nextErrors.acceptedTerms
    ) {
      console.log("Creating account", {
        fullName,
        email,
        password,
      });
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-bg" aria-hidden>
        <span className="signup-glow glow-1" />
        <span className="signup-glow glow-2" />
        <span className="signup-glow glow-3" />
      </div>

      <div className="signup-card">
        <div className="signup-header">
          <p className="signup-eyebrow">Create your account</p>
          <h1>Join the community.</h1>
          <p className="signup-subtitle">
            A modern, accessible sign-up experience with instant feedback.
          </p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <div className="signup-field-row">
            <div className="signup-field">
              <label className="signup-label" htmlFor="fullName">
                Username
              </label>
              <div className="signup-input-group">
                <input
                  id="fullName"
                  type="text"
                  placeholder="Jane Doe"
                  value={fullName}
                  onChange={handleFullNameChange}
                  className={`signup-input ${errors.fullName ? "error" : ""}`}
                  aria-invalid={!!errors.fullName}
                  aria-describedby="fullName-error"
                />
                {(fullName || submitted) && (
                  <span
                    className={`signup-validation-icon ${
                      isFullNameValid ? "valid" : "invalid"
                    }`}
                  >
                    {isFullNameValid ? "✓" : "✕"}
                  </span>
                )}
              </div>
              <span id="fullName-error" className="signup-error">
                {(submitted || fullName) && errors.fullName}
              </span>
            </div>

            <div className="signup-field">
              <label className="signup-label" htmlFor="signupEmail">
                Email address
              </label>
              <div className="signup-input-group">
                <input
                  id="signupEmail"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  className={`signup-input ${errors.email ? "error" : ""}`}
                  aria-invalid={!!errors.email}
                  aria-describedby="signupEmail-error"
                />
                {(email || submitted) && (
                  <span
                    className={`signup-validation-icon ${
                      isEmailValid ? "valid" : "invalid"
                    }`}
                  >
                    {isEmailValid ? "✓" : "✕"}
                  </span>
                )}
              </div>
              <span id="signupEmail-error" className="signup-error">
                {(submitted || email) && errors.email}
              </span>
            </div>
          </div>

          <div className="signup-field-row">
            <div className="signup-field">
              <label className="signup-label" htmlFor="signupPassword">
                Password
              </label>
              <div className="signup-input-group">
                <input
                  id="signupPassword"
                  type="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={handlePasswordChange}
                  className={`signup-input ${errors.password ? "error" : ""}`}
                  aria-invalid={!!errors.password}
                  aria-describedby="signupPassword-error"
                />
                {(password || submitted) && (
                  <span
                    className={`signup-validation-icon ${
                      isPasswordValid ? "valid" : "invalid"
                    }`}
                  >
                    {isPasswordValid ? "✓" : "✕"}
                  </span>
                )}
              </div>
              <span id="signupPassword-error" className="signup-error">
                {(submitted || password) && errors.password}
              </span>
            </div>

            <div className="signup-field">
              <label className="signup-label" htmlFor="confirmPassword">
                Confirm password
              </label>
              <div className="signup-input-group">
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={`signup-input ${errors.confirmPassword ? "error" : ""}`}
                  aria-invalid={!!errors.confirmPassword}
                  aria-describedby="confirmPassword-error"
                />
                {(confirmPassword || submitted) && (
                  <span
                    className={`signup-validation-icon ${
                      isConfirmPasswordValid ? "valid" : "invalid"
                    }`}
                  >
                    {isConfirmPasswordValid ? "✓" : "✕"}
                  </span>
                )}
              </div>
              <span id="confirmPassword-error" className="signup-error">
                {(submitted || confirmPassword) && errors.confirmPassword}
              </span>
            </div>
          </div>

          <label className="signup-terms">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) => setAcceptedTerms(event.target.checked)}
            />
            I agree to the terms and privacy policy.
          </label>
          <span className="signup-error">
            {submitted && errors.acceptedTerms}
          </span>

          <div className="signup-social-section">
            <p className="signup-social-label">Or sign up with</p>
            <div className="signup-social-row">
              <button
                type="button"
                className="signup-social-btn signup-google"
                aria-label="Sign up with Google"
              >
                <span className="signup-social-icon">G</span>
                Google
              </button>
              <button
                type="button"
                className="signup-social-btn signup-facebook"
                aria-label="Sign up with Facebook"
              >
                <span className="signup-social-icon">f</span>
                Facebook
              </button>
            </div>
          </div>

          <button className="signup-submit" type="submit">
            Create account
          </button>

          <p className="signup-footer">
            Already have an account? <Link to="/account">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
