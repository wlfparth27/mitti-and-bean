import "./TestimonialsSection.css";

const testimonials = [
  {
    quote:
      "The kind of place where you come in for one coffee and somehow spend three hours.",
    name: "A regular",
    detail: "Local customer",
  },
  {
    quote:
      "Beautiful coffee, thoughtful food, and an atmosphere that makes you want to slow down.",
    name: "A happy guest",
    detail: "Weekend visitor",
  },
  {
    quote:
      "Mitti & Bean feels less like a café and more like a little pause in the middle of the day.",
    name: "A coffee lover",
    detail: "Regular guest",
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-section__inner container">
        <div className="testimonials-section__heading">
          <span className="testimonials-section__eyebrow">
            Kind Words
          </span>

          <h2 className="testimonials-section__title">
            Good coffee.
            <br />
            Better company.
          </h2>
        </div>

        <div className="testimonials-section__grid">
          {testimonials.map((testimonial, index) => (
            <article
              className={`testimonial-card ${
                index === 1 ? "testimonial-card--featured" : ""
              }`}
              key={testimonial.name}
            >
              <span className="testimonial-card__mark">“</span>

              <p className="testimonial-card__quote">
                {testimonial.quote}
              </p>

              <div className="testimonial-card__author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;