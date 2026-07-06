import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const cartItems = [
  {
    id: "1",
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: "$145",
    quantity: 1,
    imageClass: "cart-item-image-pink",
  },
  {
    id: "2",
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: "$180",
    quantity: 1,
    imageClass: "cart-item-image-red",
  },
  {
    id: "3",
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: "$240",
    quantity: 1,
    imageClass: "cart-item-image-blue",
  },
];

function Cart() {
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
      </div>

      <div className="cart-layout">
        <section className="cart-items">
          {cartItems.map((item) => (
            <article key={item.id} className="cart-item-card">
              <div className={`cart-item-image ${item.imageClass}`} />
              <div className="cart-item-main">
                <div className="cart-item-copy">
                  <h2>{item.name}</h2>
                  <p>
                    Size: <span>{item.size}</span>
                  </p>
                  <p>
                    Color: <span>{item.color}</span>
                  </p>
                </div>
                <div className="cart-item-price">{item.price}</div>
              </div>
              <div className="cart-item-actions">
                <button
                  type="button"
                  className="cart-item-delete"
                  aria-label="Remove item"
                >
                  <FaTrash />
                </button>
                <div className="cart-item-quantity">
                  <button type="button" aria-label="Decrease quantity">
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" aria-label="Increase quantity">
                    <FaPlus />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <div className="cart-summary-header">
            <h2>Order Summary</h2>
          </div>
          <div className="cart-summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>$565</strong>
            </div>
            <div className="summary-row">
              <span>Discount (-20%)</span>
              <strong className="summary-negative">-$113</strong>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <strong>$15</strong>
            </div>
            <div className="summary-row summary-total-row">
              <span>Total</span>
              <strong>$467</strong>
            </div>
          </div>

          <div className="cart-promo">
            <input className="cart-promo-input" placeholder="Add promo code" />
            <button className="cart-promo-button" type="button">
              Apply
            </button>
          </div>

          <button
            className="cart-checkout-button"
            type="button"
            onClick={() => navigate("/cart/checkout")}
          >
            Go to Checkout
          </button>
        </aside>
      </div>
    </div>
  );
}

export default Cart;
