import "./SpaceSection.css";

function SpaceSection() {
  return (
    <section className="space-section" id="visit">
      <div className="space-section__inner container">
        <div className="space-section__header">
          <div>
            <span className="space-section__eyebrow">
              The Space
            </span>

            <h2 className="space-section__title">
              Come for the coffee.
              <br />
              Stay for the feeling.
            </h2>
          </div>

          <p className="space-section__intro">
            A warm, unhurried space designed for good conversations,
            quiet mornings, and the occasional afternoon that turns
            into evening.
          </p>
        </div>

        <div className="space-section__gallery">
          <div className="space-section__image space-section__image--large">
            <span>Image 01</span>
          </div>

          <div className="space-section__image space-section__image--small">
            <span>Image 02</span>
          </div>

          <div className="space-section__image space-section__image--small">
            <span>Image 03</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpaceSection;