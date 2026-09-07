import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__main">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              Mitti <span>&</span> Bean
            </a>

            <p>
              Good coffee, honest food,
              <br />
              and a place to slow down.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <span className="footer__heading">Explore</span>

              <a href="#home">Home</a>
              <a href="#menu">Menu</a>
              <a href="#story">Our Story</a>
              <a href="#visit">Visit Us</a>
            </div>

            <div className="footer__column">
              <span className="footer__heading">Visit</span>

              <span>24, Coffee Street</span>
              <span>Your City, India</span>
              <span>Mon – Fri · 8 AM – 9 PM</span>
              <span>Sat – Sun · 9 AM – 10 PM</span>
            </div>

            <div className="footer__column">
              <span className="footer__heading">Say Hello</span>

              <a href="tel:+919876543210">
                +91 98765 43210
              </a>

              <a href="mailto:hello@mittiandbean.com">
                hello@mittiandbean.com
              </a>

              <a href="#reserve">Reserve a Table →</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} Mitti & Bean.
            All rights reserved.
          </span>

          <div className="footer__socials">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Facebook">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;