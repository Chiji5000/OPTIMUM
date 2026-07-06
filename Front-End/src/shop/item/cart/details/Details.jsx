import { useState } from "react";
import {
  FaCreditCard,
  FaUniversity,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import "./Details.css";

function Details() {
  const [activeTab, setActiveTab] = useState("user");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formValues, setFormValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
  });
  const [validation, setValidation] = useState({
    fullName: null,
    phone: null,
    email: null,
    address: null,
    cardNumber: null,
    expiry: null,
    cvv: null,
    cardName: null,
    bankName: null,
    accountNumber: null,
    routingNumber: null,
  });

  const validators = {
    fullName: (value) => /\w+\s+\w+/.test(value),
    phone: (value) => /^\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/.test(value),
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    address: (value) => value.trim().length >= 8,
    cardNumber: (value) => /^\d{4}(\s\d{4}){3}$/.test(value),
    expiry: (value) => /^(0[1-9]|1[0-2])\/(\d{2})$/.test(value),
    cvv: (value) => /^\d{3}$/.test(value),
    cardName: (value) => /\w+\s+\w+/.test(value),
    bankName: (value) => value.trim().length >= 3,
    accountNumber: (value) => /^\d{6,12}$/.test(value),
    routingNumber: (value) => /^\d{6,9}$/.test(value),
  };

  const fieldMessages = {
    fullName: {
      valid: "Looks good.",
      invalid: "Enter first and last name.",
    },
    phone: {
      valid: "Phone format is valid.",
      invalid: "Use 10 digits.",
    },
    email: {
      valid: "Email looks valid.",
      invalid: "Enter a valid email.",
    },
    address: {
      valid: "Address looks good.",
      invalid: "Please enter a full address.",
    },
    cardNumber: {
      valid: "Card number format is valid.",
      invalid: "Format: 1234 5678 9012 3456.",
    },
    expiry: {
      valid: "Expiry looks good.",
      invalid: "Use MM/YY.",
    },
    cvv: {
      valid: "CVV looks valid.",
      invalid: "3 digits only.",
    },
    cardName: {
      valid: "Cardholder name is valid.",
      invalid: "Enter cardholder name.",
    },
    bankName: {
      valid: "Bank name is valid.",
      invalid: "Enter bank name.",
    },
    accountNumber: {
      valid: "Account number looks valid.",
      invalid: "6–12 digits.",
    },
    routingNumber: {
      valid: "Routing number looks valid.",
      invalid: "6–9 digits.",
    },
  };

  const updateValue = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    if (!value.trim()) {
      setValidation((prev) => ({ ...prev, [field]: null }));
      return;
    }

    if (validators[field]) {
      setValidation((prev) => ({ ...prev, [field]: validators[field](value) }));
    }
  };

  const getStatus = (field) => {
    if (!String(formValues[field] || "").trim()) return "";
    return validation[field] === true ? "valid" : "invalid";
  };

  const renderFieldFeedback = (field) => {
    const status = getStatus(field);
    if (!status) return null;

    return (
      <div className={`field-feedback ${status}`}>
        <span className={`validation-icon ${status}`}>
          {status === "valid" ? <FaCheckCircle /> : <FaTimesCircle />}
        </span>
        <small>{fieldMessages[field][status]}</small>
      </div>
    );
  };

  const userFields = ["fullName", "phone", "email", "address"];
  const cardFields = ["cardNumber", "expiry", "cvv", "cardName"];
  const bankFields = ["bankName", "accountNumber", "routingNumber"];

  const formatCurrency = (value) => `$${value.toFixed(2)}`;
  const orderSummary = {
    items: 3,
    subtotal: 138.97,
    shipping: 8.99,
    discount: 12.0,
  };

  const handleSaveDetails = () => {
    const updated = userFields.reduce(
      (acc, field) => ({
        ...acc,
        [field]: validators[field](formValues[field]),
      }),
      {},
    );

    setValidation((prev) => ({ ...prev, ...updated }));

    if (!Object.values(updated).every(Boolean)) {
      setActiveTab("user");
      return;
    }

    setActiveTab("payment");
  };

  const handleConfirmPayment = () => {
    const validationFields = [
      ...userFields,
      ...(paymentMethod === "card" ? cardFields : bankFields),
    ];
    const updated = validationFields.reduce(
      (acc, field) => ({
        ...acc,
        [field]: validators[field](formValues[field]),
      }),
      {},
    );

    setValidation((prev) => ({ ...prev, ...updated }));

    if (!Object.values(updated).every(Boolean)) {
      setActiveTab("user");
      return;
    }

    alert(
      `Your order has been placed successfully using ${paymentMethod === "card" ? "card checkout" : "bank transfer"}.`,
    );
  };

  return (
    <div className="checkout-page">
      <div className="checkout-bg">
        <div className="checkout-glow glow-1" />
        <div className="checkout-glow glow-2" />
        <div className="checkout-glow glow-3" />
      </div>
      <div className="checkout-header">
        <div>
          <p className="checkout-eyebrow">Checkout</p>
          <h1>Complete your purchase</h1>
          <p className="checkout-subtitle">
            Fill in your details and choose a secure payment method to finalize
            your order.
          </p>
        </div>
      </div>

      <div className="checkout-tabs">
        <button
          type="button"
          className={
            activeTab === "user" ? "checkout-tab active" : "checkout-tab"
          }
          onClick={() => setActiveTab("user")}
        >
          User Details
        </button>
        <button
          type="button"
          className={
            activeTab === "payment" ? "checkout-tab active" : "checkout-tab"
          }
          onClick={() => setActiveTab("payment")}
        >
          Payment Options
        </button>
      </div>

      <div className="checkout-panel">
        <div className="checkout-summary-card">
          <div className="summary-headline">
            <p>Order Summary</p>
            <span>{orderSummary.items} items</span>
          </div>
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>{formatCurrency(orderSummary.subtotal)}</strong>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <strong>{formatCurrency(orderSummary.shipping)}</strong>
          </div>
          <div className="summary-row accent">
            <span>Discount</span>
            <strong>-{formatCurrency(orderSummary.discount)}</strong>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>
              {formatCurrency(
                orderSummary.subtotal +
                  orderSummary.shipping -
                  orderSummary.discount,
              )}
            </strong>
          </div>
          <p className="summary-note">
            These totals are estimated and will be confirmed at checkout.
          </p>
        </div>

        <div
          className={`checkout-slide-container ${activeTab === "payment" ? "slide-right" : "slide-left"}`}
        >
          <section className="checkout-slide">
            <form className="checkout-form">
              <label className={`input-field ${getStatus("fullName")}`}>
                <span>Full Name</span>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formValues.fullName}
                  onChange={(event) =>
                    updateValue("fullName", event.target.value)
                  }
                />
                {renderFieldFeedback("fullName")}
              </label>
              <label className={`input-field ${getStatus("phone")}`}>
                <span>Phone Number</span>
                <input
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={formValues.phone}
                  onChange={(event) => updateValue("phone", event.target.value)}
                />
                {renderFieldFeedback("phone")}
              </label>
              <label className={`input-field ${getStatus("email")}`}>
                <span>Email Address</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formValues.email}
                  onChange={(event) => updateValue("email", event.target.value)}
                />
                {renderFieldFeedback("email")}
              </label>
              <label className={`input-field ${getStatus("address")}`}>
                <span>Delivery Address</span>
                <input
                  type="text"
                  placeholder="123 Main Street, Apt 4B"
                  value={formValues.address}
                  onChange={(event) =>
                    updateValue("address", event.target.value)
                  }
                />
                {renderFieldFeedback("address")}
              </label>
              <button
                type="button"
                className="checkout-submit-button"
                onClick={handleSaveDetails}
              >
                Save Details
              </button>
            </form>
          </section>

          <section className="checkout-slide">
            <div className="checkout-payment-panel">
              <div className="payment-methods">
                <button
                  type="button"
                  className={
                    paymentMethod === "card"
                      ? "payment-option active"
                      : "payment-option"
                  }
                  onClick={() => setPaymentMethod("card")}
                >
                  <FaCreditCard />
                  <div>
                    <span>Online Card Checkout</span>
                    <small>Use Visa, Mastercard, or Amex</small>
                  </div>
                </button>
                <button
                  type="button"
                  className={
                    paymentMethod === "bank"
                      ? "payment-option active"
                      : "payment-option"
                  }
                  onClick={() => setPaymentMethod("bank")}
                >
                  <FaUniversity />
                  <div>
                    <span>Bank Transfer</span>
                    <small>Secure bank payment in just a few steps</small>
                  </div>
                </button>
              </div>

              <div className="payment-details-card">
                <div className="payment-details-title">
                  <FaCheckCircle />
                  <span>
                    {paymentMethod === "card"
                      ? "Online card payment"
                      : "Bank transfer"}
                  </span>
                </div>
                {paymentMethod === "card" ? (
                  <div className="payment-fields">
                    <label className={`input-field ${getStatus("cardNumber")}`}>
                      <span>Card Number</span>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={formValues.cardNumber}
                        onChange={(event) =>
                          updateValue("cardNumber", event.target.value)
                        }
                      />
                      {renderFieldFeedback("cardNumber")}
                    </label>
                    <div className="payment-row">
                      <label className={`input-field ${getStatus("expiry")}`}>
                        <span>Expiry</span>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={formValues.expiry}
                          onChange={(event) =>
                            updateValue("expiry", event.target.value)
                          }
                        />
                        {renderFieldFeedback("expiry")}
                      </label>
                      <label className={`input-field ${getStatus("cvv")}`}>
                        <span>CVV</span>
                        <input
                          type="text"
                          placeholder="123"
                          value={formValues.cvv}
                          onChange={(event) =>
                            updateValue("cvv", event.target.value)
                          }
                        />
                        {renderFieldFeedback("cvv")}
                      </label>
                    </div>
                    <label className={`input-field ${getStatus("cardName")}`}>
                      <span>Name on Card</span>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formValues.cardName}
                        onChange={(event) =>
                          updateValue("cardName", event.target.value)
                        }
                      />
                      {renderFieldFeedback("cardName")}
                    </label>
                  </div>
                ) : (
                  <div className="payment-fields">
                    <label className={`input-field ${getStatus("bankName")}`}>
                      <span>Bank Name</span>
                      <input
                        type="text"
                        placeholder="First National Bank"
                        value={formValues.bankName}
                        onChange={(event) =>
                          updateValue("bankName", event.target.value)
                        }
                      />
                      {renderFieldFeedback("bankName")}
                    </label>
                    <label
                      className={`input-field ${getStatus("accountNumber")}`}
                    >
                      <span>Account Number</span>
                      <input
                        type="text"
                        placeholder="123456789"
                        value={formValues.accountNumber}
                        onChange={(event) =>
                          updateValue("accountNumber", event.target.value)
                        }
                      />
                      {renderFieldFeedback("accountNumber")}
                    </label>
                    <label
                      className={`input-field ${getStatus("routingNumber")}`}
                    >
                      <span>Routing Number</span>
                      <input
                        type="text"
                        placeholder="987654321"
                        value={formValues.routingNumber}
                        onChange={(event) =>
                          updateValue("routingNumber", event.target.value)
                        }
                      />
                      {renderFieldFeedback("routingNumber")}
                    </label>
                  </div>
                )}
                <button
                  type="button"
                  className="checkout-submit-button"
                  onClick={handleConfirmPayment}
                >
                  Confirm {paymentMethod === "card" ? "Card" : "Bank"} Payment
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Details;
