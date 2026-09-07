import "./StorySection.css";

function StorySection() {
  return (
    <section className="story" id="story">
      <div className="story__inner container">
        <div className="story__content">
          <span className="story__eyebrow">
            Our Story
          </span>

          <h2 className="story__title">
            Made with intention.
          </h2>

          <p className="story__text">
            Mitti & Bean was created around a simple idea: good coffee
            deserves good company. We bring together thoughtfully sourced
            coffee, comforting food, and a space that feels easy to settle
            into.
          </p>

          <p className="story__text">
            Whether you're starting your morning, meeting an old friend,
            or simply looking for somewhere to slow down, there's always
            a seat waiting for you.
          </p>
        </div>

        <div className="story__visual" aria-hidden="true">
          <div className="story__image-placeholder">
            <span>M&B</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;