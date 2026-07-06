import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaFilter, FaChevronDown } from "react-icons/fa";
import "./Shop.css";

const categories = [
  "New",
  "Shirts",
  "Polo shirts",
  "Shorts",
  "Suits",
  "Best sellers",
  "T-shirts",
  "Jeans",
  "Jackets",
  "Coats",
];

const products = [
  {
    id: 1,
    name: "Basic slim fit tee",
    subtitle: "Cotton t-shirt",
    price: "$199",
    inStock: true,
  },
  {
    id: 2,
    name: "Basic heavy weight tee",
    subtitle: "Crewneck t-shirt",
    price: "$199",
    inStock: true,
  },
  {
    id: 3,
    name: "Full sleeve zipper",
    subtitle: "Cotton t-shirt",
    price: "$199",
    inStock: true,
  },
  {
    id: 4,
    name: "Basic slim fit tee",
    subtitle: "Cotton t-shirt",
    price: "$299",
    inStock: true,
  },
  {
    id: 5,
    name: " slim fit tee",
    subtitle: "Cotton t-shirt",
    price: "$239",
    inStock: true,
  },
];

function Shop() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("New");

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="shop-page">
      <div className="shop-hero">
        <div className="shop-hero-copy">
          <div className="shop-topline">
            <span>PRODUCTS</span>
          </div>
          <h3>Explore premium essentials built for every day.</h3>
          <p>
            Curated products, subtle filters, and compact search controls
            designed to feel modern and clean.
          </p>
        </div>
        <div className="shop-hero-actions">
          <button className="shop-hero-filter">
            <FaFilter /> Filters
          </button>
          <div className="shop-search-input-wrap">
            <FaSearch />
            <input
              type="search"
              placeholder="Search products"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="shop-category-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={`shop-category-pill ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="shop-layout">
        <aside className="shop-sidebar">
          <div className="shop-panel">
            <div className="shop-panel-header">
              <h2>Filters</h2>
              <button className="shop-panel-clear">Clear all</button>
            </div>

            <div className="shop-filter-block">
              <p className="shop-filter-label">Size</p>
              <div className="shop-size-grid">
                {["XS", "S", "M", "L", "XL", "2X"].map((size) => (
                  <button key={size} className="shop-size-pill">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="shop-filter-block">
              <div className="shop-filter-title-row">
                <p className="shop-filter-label">Availability</p>
                <FaChevronDown />
              </div>
              <label className="shop-checkbox-label">
                <input type="checkbox" /> Availability <span>(450)</span>
              </label>
              <label className="shop-checkbox-label">
                <input type="checkbox" /> Out of stock <span>(18)</span>
              </label>
            </div>

            <div className="shop-menu-group">
              <button className="shop-menu-item">
                Category <FaChevronDown />
              </button>
              <button className="shop-menu-item">
                Colors <FaChevronDown />
              </button>
              <button className="shop-menu-item">
                Price range <FaChevronDown />
              </button>
              <button className="shop-menu-item">
                Ratings <FaChevronDown />
              </button>
            </div>

            <div className="shop-panel-footer">
              <button className="shop-apply-btn">Apply</button>
            </div>
          </div>
        </aside>

        <section className="shop-products">
          <div className="shop-grid">
            {visibleProducts.map((product) => (
              <article
                key={product.id}
                className="shop-card"
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/shop/item/${product.id}`)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(`/shop/item/${product.id}`);
                  }
                }}
              >
                <div className="shop-card-top">
                  <button
                    className="shop-wishlist-btn"
                    aria-label="Add to wishlist"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaHeart />
                  </button>
                </div>
                <div className="shop-card-image">
                  <div className="shop-card-image-icon">👕</div>
                </div>
                <div className="shop-card-body">
                  <div className="shop-card-link">
                    <p className="shop-card-meta">{product.subtitle}</p>
                    <h3>{product.name}</h3>
                  </div>
                  <div className="shop-card-footer">
                    <span>{product.price}</span>
                    <div className="shop-card-indicators">
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="shop-grid-loading">
            <div className="shop-loader" aria-hidden="true"></div>
            <span>Loading more products...</span>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default Shop;
