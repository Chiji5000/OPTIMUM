import React, { useEffect, useState, useRef } from "react";
import "./Home.css";

import hero from "../../img/smart-watch.png";
import tablet from "../../img/tablets.png";
import laptop from "../../img/laptop.png";
import hand from "../../img/hand2.png";
import versace from "../../img/Versach.png";
import zara from "../../img/Zara.png";
import gucci from "../../img/Gucci.png";
import prada from "../../img/Prada.png";
import ck from "../../img/Calvin-Klein.png";

import casual from "../../img/casual.png";
import party from "../../img/party.png";
import gym from "../../img/guy.png";

import prod1 from "../../img/mobile.png";
import prod2 from "../../img/iphone.png";
import prod3 from "../../img/XIAOMI.png";
import prod4 from "../../img/realme.png";
import shirt1 from "../../img/shirt1.png";
import appleLogo from "../../img/apple-logo.png";
import realmeLogo from "../../img/realme-logo.png";
import xiaomiLogo from "../../img/XIAOMI-LOGO.png";
import iphoneImg from "../../img/iphone.png";
import realmeImg from "../../img/realme.png";
import xiaomiImg from "../../img/XIAOMI.png";

function Home() {
  const slides = [
    {
      id: 0,
      eyebrow: "Best Deal Online on smart watches",
      title: "SMART WEARABLE.",
      sub: "UP to 80% OFF",
      image: hero,
    },
    {
      id: 1,
      eyebrow: "Limited Time Offer on smart Devices",
      title: "New Laptop.",
      sub: "Save up to 70%",
      image: laptop,
    },
    {
      id: 2,
      eyebrow: "New Arrivals this in Town",
      title: "Best Tablets.",
      sub: "Free shipping",
      image: tablet,
    },
  ];

  const categories = [
    "Food",
    "seafood",
    "underwear",
    "Fashion",
    "Smartphones",
    "Beauty",
    "accessories",
  ];

  const [activeCat, setActiveCat] = useState(0);

  const [index, setIndex] = useState(0);
  const autoplayRef = useRef(null);

  // stats counter state (initially zero until section visible)
  const statsTargets = [200, 2000, 30000];
  const [counts, setCounts] = useState([0, 0, 0]);
  const positionRef = useRef(null);

  // format numbers with commas
  function formatNumber(n) {
    return new Intl.NumberFormat().format(Math.floor(n));
  }

  // trigger counters when position section scrolls into view
  useEffect(() => {
    const el = positionRef.current;
    if (!el) return;

    let started = false;
    const duration = 1600;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            function step(now) {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              const next = statsTargets.map((target) => target * eased);
              setCounts(next);
              if (t < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // autoplay
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, []);

  // keyboard navigation for carousel
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // touch / swipe handlers
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    if (!touchStartX.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  }

  function handleTouchEnd() {
    const delta = touchDeltaX.current;
    const threshold = 50;
    if (delta > threshold) goPrev();
    else if (delta < -threshold) goNext();
    touchStartX.current = null;
    touchDeltaX.current = 0;
  }

  function goPrev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
    resetAutoplay();
  }

  function goNext() {
    setIndex((i) => (i + 1) % slides.length);
    resetAutoplay();
  }

  function goTo(i) {
    setIndex(i);
    resetAutoplay();
  }

  function resetAutoplay() {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000,
    );
  }

  // Render the circular categories row (reusable)
  function CategoriesRow({ compact = false }) {
    return (
      <div className={`cat-circle-row ${compact ? "compact" : ""}`} role="list">
        {categories.map((label, idx) => (
          <button
            key={label}
            role="listitem"
            className={`cat-circle-item`}
            onClick={() => setActiveCat(idx)}
            aria-pressed={idx === activeCat}
            aria-label={`Browse ${label}`}
          >
            <div className={`cat-circle ${idx === activeCat ? "active" : ""}`}>
              <img
                src={[prod1, casual, laptop, gym, hero, party, tablet][idx]}
                alt={label}
              />
            </div>
            <div className="cat-circle-label">{label}</div>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="home">
      <section className="category-bar-wrap">
        <div className="category-bar container">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`category-pill ${i === activeCat ? "active" : ""}`}
              onClick={() => setActiveCat(i)}
              aria-pressed={i === activeCat}
            >
              <span className="pill-text">{c}</span>
              <span className="pill-caret">▾</span>
            </button>
          ))}
        </div>
      </section>
      {/* Top categories - duplicated to appear above hero for prominence */}
      <section className="home-hero">
        <div
          className="hero-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="hero-nav left"
            aria-label="Previous"
            onClick={goPrev}
          >
            <span className="chev">‹</span>
          </button>

          <div className="hero-card">
            <div className="slides">
              {slides.map((s, i) => (
                <div
                  key={s.id}
                  className={`slide ${i === index ? "active" : ""}`}
                >
                  <div className="hero-card-inner">
                    <div className="hero-card-left">
                      <div className="eyebrow">{s.eyebrow}</div>
                      <h1 className="hero-title">{s.title}</h1>
                      <div className="hero-sub">{s.sub}</div>

                      <div className="hero-dots" aria-hidden>
                        <span className="pill" />
                        {slides.map((_, j) => (
                          <button
                            key={j}
                            className={`dot-btn ${j === index ? "active" : ""}`}
                            onClick={() => goTo(j)}
                            aria-label={`Go to slide ${j + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="hero-card-right" aria-hidden>
                      <span className="ring ring1" />
                      <span className="ring ring2" />
                      <span className="ring ring3" />
                      <img src={s.image} alt={s.title} className="hero-image" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="hero-nav right" aria-label="Next" onClick={goNext}>
            <span className="chev">›</span>
          </button>
        </div>
      </section>
      <section ref={positionRef} className="position-section">
        <div className="position-inner container">
          <div className="position-left">
            <h2 className="position-title">Positioning Statement</h2>
            <p className="position-lead">
              OPTIMUM is a purpose-driven commerce and lifestyle brand dedicated
              to delivering the highest standard of value, quality, and customer
              satisfaction. Through meaningful exchanges, exceptional
              experiences, and continuous expansion, we empower individuals and
              businesses to grow with confidence while enjoying products and
              services they can trust. OPTIMUM — Excellence in Every Exchange.
            </p>

            <button className="btn-primary">Shop Now</button>

            <div className="position-stats">
              <div className="stat">
                <div className="num">{formatNumber(counts[0])}+ </div>
                <div className="label">International Brands</div>
              </div>

              <div className="stat">
                <div className="num">{formatNumber(counts[1])}+ </div>
                <div className="label">High-Quality Products</div>
              </div>

              <div className="stat">
                <div className="num">{formatNumber(counts[2])}+ </div>
                <div className="label">Happy Customers</div>
              </div>
            </div>
          </div>

          <div className="position-right">
            <img src={hand} className="hand-image" alt="Holding hands" />
          </div>
        </div>
      </section>
      <section className="brand-strip" aria-hidden>
        <div className="brand-strip-inner">
          <div className="brand-track" role="presentation">
            {[versace, zara, gucci, prada, ck].map((src, i) => (
              <div className="brand" key={`b1-${i}`}>
                <img src={src} alt="" />
              </div>
            ))}
            {[versace, zara, gucci, prada, ck].map((src, i) => (
              <div className="brand" key={`b2-${i}`}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Bottom categories (keeps existing placement) */}
      <section
        className="home-categories container"
        aria-label="Top categories"
      >
        <div className="categories-header brands-header">
          <h3>
            Top <span className="accent">Categories</span>
          </h3>
          <a className="view-all" href="#">
            View All ›
          </a>
        </div>

        <div className="underline" />

        <CategoriesRow />
      </section>
      {/* Featured deals / product row inspired by the screenshot */}
      <section className="featured-products container">
        <div className="brands-header">
          <h3>
            Grab the best deal on <span className="accent">Smartphones</span>
          </h3>
          <a className="view-all" href="#">
            View All ›
          </a>
        </div>

        <div className="underline" />

        <div className="product-cards">
          {[
            {
              img: prod2,
              title: "Galaxy S22 Ultra",
              price: "₹32999",
              old: "₹74999",
              save: "32999",
              badge: "56% OFF",
            },
            {
              img: prod1,
              title: "Galaxy M13 (4GB | 64 GB )",
              price: "₹10499",
              old: "₹14999",
              save: "4500",
              badge: "56% OFF",
            },
            {
              img: prod3,
              title: "Galaxy M33 (4GB | 64 GB )",
              price: "₹16999",
              old: "₹24999",
              save: "8000",
              badge: "56% OFF",
            },
            {
              img: prod4,
              title: "Galaxy M53 (4GB | 64 GB )",
              price: "₹31999",
              old: "₹40999",
              save: "9000",
              badge: "56% OFF",
            },
            {
              img: prod1,
              title: "Galaxy S22 Ultra",
              price: "₹67999",
              old: "₹85999",
              save: "18000",
              badge: "56% OFF",
            },
          ].map((p, i) => (
            <article key={i} className="product-card featured">
              <div className="card-media">
                <span className="badge">{p.badge}</span>
                <img src={p.img} alt={p.title} />
              </div>
              <div className="card-body">
                <div className="product-title">{p.title}</div>
                <div className="product-prices">
                  <span className="price">{p.price}</span>
                  <span className="old-price">{p.old}</span>
                </div>
                <div className="save-line">
                  Save - <strong>₹{p.save}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="top-brands container">
        <div className="brands-header">
          <h3>
            Top <span className="accent">Electronics Brands</span>
          </h3>
          <a className="view-all" href="#">
            View All ›
          </a>
        </div>

        <div className="underline" />

        <div className="brand-cards">
          <article className="brand-card dark">
            <div className="card-left">
              <div className="label">IPHONE</div>
              <div className="brand-icon">
                <img src={appleLogo} alt="Apple" />
              </div>
              <div className="promo">UP to 80% OFF</div>
            </div>
            <div className="card-right">
              <img src={iphoneImg} alt="iPhone" />
            </div>
          </article>

          <article className="brand-card warm">
            <div className="card-left">
              <div className="label">REALME</div>
              <div className="brand-icon">
                <img src={realmeLogo} alt="Realme" />
              </div>
              <div className="promo">UP to 80% OFF</div>
            </div>
            <div className="card-right">
              <img src={realmeImg} alt="Realme Phone" />
            </div>
          </article>

          <article className="brand-card light">
            <div className="card-left">
              <div className="label">XIAOMI</div>
              <div className="brand-icon">
                <img src={xiaomiLogo} alt="Xiaomi" />
              </div>
              <div className="promo">UP to 80% OFF</div>
            </div>
            <div className="card-right">
              <img src={xiaomiImg} alt="Xiaomi Phone" />
            </div>
          </article>
        </div>
      </section>
      <section className="browse-by-style container">
        <div className="browse-header">
          <h2 className="browse-main">Browse by Dress Style</h2>
        </div>

        <div className="browse-grid">
          <div className="browse-row">
            <article className="browse-card narrow">
              <div className="browse-label"></div>
              <img src={casual} alt="Casual" />{" "}
            </article>

            <article className="browse-card wide">
              <div className="browse-label">Formal</div>
              <img src={laptop} alt="Formal" />{" "}
            </article>
          </div>

          <div className="browse-row">
            <article className="browse-card wide">
              <div className="browse-label">Party</div>
              <img src={party} alt="Party" />{" "}
            </article>

            <article className="browse-card narrow">
              <div className="browse-label"></div>
              <img src={gym} alt="Gym" />{" "}
            </article>
          </div>
        </div>
      </section>

      {/* New This Week - placed immediately after Browse by Style */}
      <section className="new-this-week container">
        <div className="new-header">
          <h3 className="new-title">
            <span className="line1">NEW THIS</span>
            <span className="line2">WEEK</span>
            <span className="count">(50)</span>
          </h3>
        </div>

        <div className="new-grid">
          {[
            {
              img: shirt1,
              title: "Embroidered Seersucker Shirt",
              sub: "V-Neck T-Shirt",
              price: "$99",
            },
            {
              img: shirt1,
              title: "Basic Slim Fit T-Shirt",
              sub: "Cotton T-Shirt",
              price: "$99",
            },
            {
              img: shirt1,
              title: "Blurred Print T-Shirt",
              sub: "Henley T-Shirt",
              price: "$99",
            },
            {
              img: shirt1,
              title: "Full Sleeve Zipper",
              sub: "Crewneck T-Shirt",
              price: "$99",
            },
          ].map((p, i) => (
            <article key={i} className="new-tile">
              <div className="tile-media">
                <img src={p.img} alt={p.title} loading="lazy" />
                <button className="tile-add" aria-label={`Add ${p.title}`}>
                  +
                </button>
              </div>
              <div className="tile-info">
                <div>
                  <div className="tile-sub">{p.sub}</div>
                  <div className="tile-title">{p.title}</div>
                </div>
                <div className="tile-price">{p.price}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="new-pager" aria-hidden>
          <button className="pager-btn" aria-label="Previous">
            ‹
          </button>
          <button className="pager-btn" aria-label="Next">
            ›
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
