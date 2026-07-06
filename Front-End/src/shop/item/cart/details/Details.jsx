import { useState } from "react";
import { FaCreditCard, FaUniversity, FaCheckCircle } from "react-icons/fa";
import "./Details.css";

function Details() {
  const [activeTab, setActiveTab] = useState("user");
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div>
          <p className="checkout-eyebrow">Checkout</p>
          <h1>Complete your purchase</h1>
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
        {activeTab === "user" ? (
          <form className="checkout-form">
            <label>
              Full Name
              <input type="text" placeholder="John Doe" />
            </label>
            <label>
              Phone Number
              <input type="tel" placeholder="(123) 456-7890" />
            </label>
            <label>
              Email Address
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Delivery Address
              <input type="text" placeholder="123 Main Street, Apt 4B" />
            </label>
            <button type="button" className="checkout-submit-button">
              Save Details
            </button>
          </form>
        ) : (
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
                  <small>Use your Visa, Mastercard, or Amex</small>
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
                  <small>Send payment using your bank account</small>
                </div>
              </button>
            </div>

            <div className="payment-details-card">
              <div className="payment-details-title">
                <FaCheckCircle />
                <span>
                  {paymentMethod === "card"
                    ? "Online card checkout"
                    : "Bank transfer"}
                </span>
              </div>
              {paymentMethod === "card" ? (
                <div className="payment-fields">
                  <label>
                    Card Number
                    <input type="text" placeholder="1234 5678 9012 3456" />
                  </label>
                  <div className="payment-row">
                    <label>
                      Expiry
                      <input type="text" placeholder="MM/YY" />
                    </label>
                    <label>
                      CVV
                      <input type="text" placeholder="123" />
                    </label>
                  </div>
                  <label>
                    Name on Card
                    <input type="text" placeholder="John Doe" />
                  </label>
                </div>
              ) : (
                <div className="payment-fields">
                  <label>
                    Bank Name
                    <input type="text" placeholder="First National Bank" />
                  </label>
                  <label>
                    Account Number
                    <input type="text" placeholder="123456789" />
                  </label>
                  <label>
                    Routing Number
                    <input type="text" placeholder="987654321" />
                  </label>
                </div>
              )}
              <button type="button" className="checkout-submit-button">
                Confirm {paymentMethod === "card" ? "Card" : "Bank"} Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
