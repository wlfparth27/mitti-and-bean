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
                <img
                src="/images/space/interior.jpg"
                alt="Warm interior of Mitti & Bean café"
                />
            </div>

            <div className="space-section__image space-section__image--small">
                <img
                src="/images/space/seating.jpg"
                alt="Quiet seating area inside Mitti & Bean café"
                />
            </div>

            <div className="space-section__image space-section__image--small">
                <img
                src="/images/space/detail.jpg"
                alt="Interior detail at Mitti & Bean café"
                />
            </div>
        </div>
      </div>
    </section>
  );
}

export default SpaceSection;