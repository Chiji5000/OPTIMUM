import "./About.css";
import { useState, useRef, useEffect } from "react";

function About() {
  const [open, setOpen] = useState([true, false, false, false]);
  const allOpen = open.every(Boolean);
  const testimonialsRef = useRef(null);
  const testimonials = [
    {
      name: "Sarah M.",
      avatar: "https://i.pravatar.cc/120?img=12",
      stars: 5,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      avatar: "https://i.pravatar.cc/120?img=47",
      stars: 5,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "James L.",
      avatar: "https://i.pravatar.cc/120?img=32",
      stars: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      name: "Maya R.",
      avatar: "https://i.pravatar.cc/120?img=8",
      stars: 5,
      text: "Customer service and fast shipping made my experience seamless. The products arrived exactly as described and the packaging felt premium.",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);

  function scrollNext() {
    const el = testimonialsRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (Math.abs(el.scrollLeft - max) < 10) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
    }
  }

  function scrollPrev() {
    const el = testimonialsRef.current;
    if (!el) return;
    if (el.scrollLeft < 10) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => scrollNext(), 5000);
    return () => clearInterval(id);
  }, [isPaused]);

  function toggle(i) {
    setOpen((prev) => {
      const copy = prev.slice();
      copy[i] = !copy[i];
      return copy;
    });
  }

  function toggleAll() {
    setOpen(open.every(Boolean) ? open.map(() => false) : open.map(() => true));
  }

  return (
    <div className="about">
      <section
        className="about__hero"
        role="img"
        aria-label="About Optimum hero"
      >
        <div className="about__hero-overlay">
          <h1>About Optimum</h1>
        </div>
      </section>

      <section className="about__content">
        <div className="about__card">
          <p>
            At OPTIMUM, we believe commerce should be more than transactions—it
            should be a gateway to growth, connection, and lasting value. Born
            from a vision to create a destination where people, products, and
            opportunities converge at the highest standard, OPTIMUM is built on
            the principles of gratitude, purpose, and excellence. Inspired by
            the meaning of Oluwaseun—a name rooted in blessing and
            appreciation—we exist to make every interaction meaningful and every
            experience exceptional.
          </p>
        </div>
      </section>

      <section className="about__gallery-section">
        <h2 className="about__gallery-title">Our Marketplace</h2>

        <div
          className="carousel"
          role="region"
          aria-label="Featured products carousel"
        >
          <div className="carousel__track">
            <div className="carousel__item">
              <img
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1350&q=80"
                alt="Home goods product display"
              />
            </div>
            <div className="carousel__item">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80"
                alt="Bathroom products display"
              />
            </div>
            <div className="carousel__item">
              <img
                src="../../img/type-c.png"
                alt="Product arrangement on table"
              />
            </div>
            <div className="carousel__item">
              <img
                src="../../img/controller.png"
                alt="Lifestyle product scene"
              />
            </div>

            {/* duplicate for seamless loop */}
            <div className="carousel__item">
              <img
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1350&q=80"
                alt="Home goods product display"
              />
            </div>
            <div className="carousel__item">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80"
                alt="Bathroom products display"
              />
            </div>
            <div className="carousel__item">
              <img
                src="https://images.unsplash.com/photo-1606813902843-39b2f2f2c1f6?auto=format&fit=crop&w=1350&q=80"
                alt="Product arrangement on table"
              />
            </div>
            <div className="carousel__item">
              <img
                src="https://images.unsplash.com/photo-1513708928675-6f7a3a3e38a5?auto=format&fit=crop&w=1350&q=80"
                alt="Lifestyle product scene"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about__values">
        <h2 className="about__values-title">Our Core Values</h2>

        <div className="values__grid">
          <div className="value">
            <div className="value__num">1</div>
            <h3 className="value__title">Excellence</h3>
            <p className="value__desc">
              Pursuing the highest standards in products and service.
            </p>
          </div>

          <div className="value">
            <div className="value__num">2</div>
            <h3 className="value__title">Trust</h3>
            <p className="value__desc">
              Building confidence through transparency and consistency.
            </p>
          </div>

          <div className="value">
            <div className="value__num">3</div>
            <h3 className="value__title">Innovation</h3>
            <p className="value__desc">
              Continuously improving experiences and solutions.
            </p>
          </div>

          <div className="value">
            <div className="value__num">4</div>
            <h3 className="value__title">Growth</h3>
            <p className="value__desc">
              Creating opportunities for customers and partners.
            </p>
          </div>

          <div className="value">
            <div className="value__num">5</div>
            <h3 className="value__title">Connection</h3>
            <p className="value__desc">
              Bringing people and opportunities together.
            </p>
          </div>

          <div className="value">
            <div className="value__num">6</div>
            <h3 className="value__title">Customer Satisfaction</h3>
            <p className="value__desc">
              Placing customer success at the center of every decision.
            </p>
          </div>
        </div>
      </section>

      <section className="about__showcase">
        <div className="showcase__container">
          <div className="container_left">
            <div className="showcase__text">
              <h2>Our Mission</h2>
              <p>
                Our mission is to deliver optimum value through trusted
                products, exceptional customer experiences, and innovative
                solutions that connect people with opportunities. <br></br>By
                combining quality, reliability, and purpose across diverse
                industries, OPTIMUM creates meaningful exchanges that inspire
                growth, satisfaction, and long-term success.
              </p>
            </div>

            <div className="showcase__img showcase__img--left-bottom">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
                alt="Art print and chair"
              />
            </div>
          </div>

          <div className="container_right">
            <div className="showcase__img showcase__img--right-top">
              <img
                src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1400&q=80"
                alt="Living room with sofa"
              />
            </div>

            <div className="showcase__img showcase__img--right-bottom">
              <img
                src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80"
                alt="Staircase and lounge"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about__faq">
        <div className="faq__container">
          <div className="faq__intro">
            <h2>Frequently Asked Questions</h2>
            <p>
              If there are question you want to ask.
              <br />
              We will answer all your question.
            </p>
          </div>

          <div className="faq__right">
            <div className="faq__controls">
              <button
                className={`faq__toggle-all ${allOpen ? "is-open" : ""}`}
                onClick={toggleAll}
                aria-pressed={allOpen}
              >
                <span className="faq__toggle-all-icon">
                  {allOpen ? "−" : "+"}
                </span>
                <span style={{ marginLeft: 10 }}>
                  {allOpen ? "Collapse all" : "Expand all"}
                </span>
              </button>
            </div>

            <div className="faq__list">
              {[
                {
                  q: "What is cluster housing perumnas?",
                  a: "Cluster housing perumnas is a housing concept that consists of several houses in a gated cluster. Cluster housing perumnas offers comfortable, secure, and affordable housing with various complete and modern facilities.",
                },
                {
                  q: "Where is the location of cluster housing perumnas?",
                  a: "Our developments are located in carefully selected neighborhoods with good access to transport, schools, and local amenities. Contact our sales team for exact addresses and availability.",
                },
                {
                  q: "How much are the prices and types of houses in cluster housing perumnas?",
                  a: "Prices vary by project, house type, and chosen finishes. We offer a range from starter homes to larger family layouts — please view our listings or reach out for a tailored quote.",
                },
                {
                  q: "What are the facilities provided in cluster housing perumnas?",
                  a: "Facilities typically include 24/7 security, landscaped communal areas, children’s play spaces, parking, and basic utilities — specifics depend on the development.",
                },
              ].map((item, idx) => {
                const isOpen = !!open[idx];
                const contentId = `faq-content-${idx}`;
                return (
                  <div
                    key={idx}
                    className={`faq__item ${isOpen ? "is-open" : ""}`}
                  >
                    <button
                      className="faq__question"
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className="faq__question-text">{item.q}</span>
                      <span className="faq__icon">{isOpen ? "−" : "+"}</span>
                    </button>

                    <div id={contentId} className="faq__content" role="region">
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="about__testimonials">
        <div className="testimonials__container">
          <h2 className="testimonials__title">OUR HAPPY CUSTOMERS</h2>

          <div className="testimonials__controls">
            <button
              className="testimonials__arrow"
              aria-label="Previous testimonials"
              onClick={scrollPrev}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="testimonials__arrow"
              aria-label="Next testimonials"
              onClick={scrollNext}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            className="testimonials__track"
            ref={testimonialsRef}
            role="list"
            aria-label="Customer testimonials"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {testimonials.map((t, i) => (
              <article key={i} className="testimonial__card" role="listitem">
                <div className="testimonial__top">
                  <img
                    className="testimonial__avatar"
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                  />
                  <div className="testimonial__meta">
                    <div className="testimonial__meta-line">
                      <strong className="testimonial__name">{t.name}</strong>
                      <span className="testimonial__verified">✔︎</span>
                    </div>

                    <div className="testimonial__stars" aria-hidden>
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <svg
                          key={s}
                          className="star"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.56L19.335 24 12 19.897 4.665 24 6.3 15.31 0.6 9.75l7.732-1.732z" />
                        </svg>
                      ))}
                      <span className="sr-only">{t.stars} out of 5 stars</span>
                    </div>
                  </div>
                </div>

                <p className="testimonial__text">{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
