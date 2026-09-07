import "./VisitSection.css";

function VisitSection() {
  return (
    <section className="visit-section" id="visit">
      <div className="visit-section__inner container">
        <div className="visit-section__content">
          <span className="visit-section__eyebrow">
            Come Say Hello
          </span>

          <h2 className="visit-section__title">
            Find your way
            <br />
            to Mitti & Bean.
          </h2>

          <p className="visit-section__description">
            Drop in for a slow morning, meet someone over coffee,
            or simply find a quiet corner to spend the afternoon.
            We'd love to have you.
          </p>

          <div className="visit-section__details">
            <div className="visit-section__detail">
              <span className="visit-section__label">Visit Us</span>
              <p>
                24, Coffee Street
                <br />
                Your City, India
              </p>
            </div>

            <div className="visit-section__detail">
              <span className="visit-section__label">Opening Hours</span>
              <p>
                Monday – Friday
                <br />
                8:00 AM – 9:00 PM
              </p>
              <p>
                Saturday – Sunday
                <br />
                9:00 AM – 10:00 PM
              </p>
            </div>

            <div className="visit-section__detail">
              <span className="visit-section__label">Get in Touch</span>
              <p>
                +91 98765 43210
                <br />
                hello@mittiandbean.com
              </p>
            </div>
          </div>
        </div>

        <div className="visit-section__map">
            <img
                className="visit-section__map-image"
                src="/images/space/interior.jpg"
                alt="Interior of Mitti & Bean café"
            />

            <div className="visit-section__map-overlay" />

            <div className="visit-section__map-placeholder">
                <span className="visit-section__map-pin">●</span>

                <div>
                <strong>Mitti & Bean</strong>
                <span>Your City, India</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default VisitSection;