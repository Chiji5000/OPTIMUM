import { Link, useParams } from "react-router-dom";
import "./item.css";

const products = [
  {
    id: "1",
    name: "One Life Graphic T-Shirt",
    subtitle: "Premium cotton streetwear",
    price: "$260",
    originalPrice: "$300",
    discount: "-40%",
    rating: 4.5,
    description:
      "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    colors: ["#3d4d47", "#214b48", "#2f3a61"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: "2",
    name: "Basic Slim Fit Tee",
    subtitle: "Cotton t-shirt",
    price: "$199",
    originalPrice: "$250",
    discount: "-20%",
    rating: 4.3,
    description:
      "A clean everyday tee made from breathable cotton with a flattering slim fit.",
    colors: ["#101010", "#5b5b5b", "#ffffff"],
    sizes: ["Small", "Medium", "Large"],
  },
];

const reviews = [
  {
    name: "Samantha D.",
    stars: 5,
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail.",
    date: "August 14, 2023",
  },
  {
    name: "Alex M.",
    stars: 5,
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. This shirt definitely gets a thumbs up from me.",
    date: "August 15, 2023",
  },
  {
    name: "Ethan R.",
    stars: 4,
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect.",
    date: "August 16, 2023",
  },
  {
    name: "Olivia P.",
    stars: 4,
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt represents those principles while feeling great to wear.",
    date: "August 17, 2023",
  },
  {
    name: "Liam K.",
    stars: 4,
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill.",
    date: "August 18, 2023",
  },
  {
    name: "Ava H.",
    stars: 4.5,
    text: "Not just a t-shirt; I'm wearing a piece of design philosophy. The intricate details make this shirt a conversation starter.",
    date: "August 19, 2023",
  },
];

const alsoLike = [
  {
    id: "3",
    name: "Polo with Contrast Trims",
    price: "$212",
    originalPrice: "$242",
    discount: "-20%",
    rating: 4,
    imageVariant: "blue",
  },
  {
    id: "4",
    name: "Gradient Graphic T-shirt",
    price: "$145",
    originalPrice: null,
    discount: null,
    rating: 3.5,
    imageVariant: "pink",
  },
  {
    id: "5",
    name: "Polo with Tipping Details",
    price: "$180",
    originalPrice: null,
    discount: null,
    rating: 4.5,
    imageVariant: "red",
  },
  {
    id: "6",
    name: "Black Striped T-shirt",
    price: "$120",
    originalPrice: "$150",
    discount: "-30%",
    rating: 5,
    imageVariant: "mono",
  },
];

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const totalStars = 5;
  return (
    <>
      {Array.from({ length: fullStars }).map((_, index) => (
        <span key={`full-${index}`}>★</span>
      ))}
      {hasHalf && <span key="half">☆</span>}
      {Array.from({ length: totalStars - fullStars - (hasHalf ? 1 : 0) }).map(
        (_, index) => (
          <span key={`empty-${index}`}>☆</span>
        ),
      )}
    </>
  );
}

function Item() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id) || products[0];

  return (
    <div className="item-page">
      <div className="item-breadcrumbs">
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="item-grid">
        <div className="item-thumbs">
          {[1, 2, 3].map((thumb) => (
            <button key={thumb} className="item-thumb-button" type="button">
              <div className="item-thumb-image" />
            </button>
          ))}
        </div>

        <div className="item-image-panel">
          <div className="item-image-frame">
            <div className="item-image-large" />
          </div>
        </div>

        <div className="item-details">
          <div className="item-title-row">
            <div>
              <h1>{product.name}</h1>
              <p className="item-hero-stand">
                Stands out with premium streetwear performance.
              </p>
            </div>
            <div className="item-review-stars" aria-hidden="true">
              {Array.from({ length: Math.floor(product.rating) }).map(
                (_, index) => (
                  <span key={index}>★</span>
                ),
              )}
              {product.rating % 1 !== 0 && <span>☆</span>}
            </div>
            <div className="item-rating">{product.rating}/5</div>
          </div>

          <div className="item-price-row">
            <strong>{product.price}</strong>
            <span className="item-original-price">{product.originalPrice}</span>
            <span className="item-discount-badge">{product.discount}</span>
          </div>

          <p className="item-description">{product.description}</p>

          <div className="item-color-row">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                className="item-color-swatch"
                style={{ background: color }}
                type="button"
              />
            ))}
          </div>

          <div className="item-size-group">
            <span>Choose Size</span>
            <div className="item-sizes">
              {product.sizes.map((size) => (
                <button key={size} type="button">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="item-actions-row">
            <div className="item-quantity">
              <button type="button">-</button>
              <span>1</span>
              <button type="button">+</button>
            </div>
            <button className="item-add-cart" type="button">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <section className="item-reviews">
        <div className="item-reviews-header">
          <div>
            <h2>All Reviews</h2>
            <span>(451)</span>
          </div>
          <div className="item-reviews-controls">
            <button className="item-reviews-sort" type="button">
              Latest
            </button>
            <button className="item-reviews-write" type="button">
              Write a Review
            </button>
          </div>
        </div>

        <div className="item-reviews-grid">
          {reviews.map((review) => (
            <article key={review.name} className="item-review-card">
              <div className="item-review-top">
                <div>
                  <div className="item-review-stars" aria-hidden="true">
                    {Array.from({ length: Math.floor(review.stars) }).map(
                      (_, index) => (
                        <span key={index}>★</span>
                      ),
                    )}
                    {review.stars % 1 !== 0 && <span>☆</span>}
                  </div>
                  <div className="item-review-meta">
                    <strong>{review.name}</strong>
                    <span className="item-review-verified">✔︎</span>
                  </div>
                </div>
                <button className="item-review-menu" type="button">
                  •••
                </button>
              </div>
              <p className="item-review-text">{review.text}</p>
              <div className="item-review-date">Posted on {review.date}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="item-also-like">
        <div className="item-also-like-header">
          <h2>You Might Also Like</h2>
        </div>
        <div className="item-also-like-grid">
          {alsoLike.map((item) => (
            <article key={item.id} className="item-card-also-like">
              <div className="item-card-hand" aria-hidden="true">
                🤚
              </div>
              <div
                className={`item-card-image item-card-image-${item.imageVariant}`}
              />
              <div className="item-card-body">
                <h3>{item.name}</h3>
                <div className="item-card-stars" aria-hidden="true">
                  {renderStars(item.rating)}
                  <span>{item.rating}/5</span>
                </div>
                <div className="item-card-pricing">
                  <strong>{item.price}</strong>
                  {item.originalPrice && (
                    <span className="item-card-original-price">
                      {item.originalPrice}
                    </span>
                  )}
                  {item.discount && (
                    <span className="item-card-discount">{item.discount}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Item;
