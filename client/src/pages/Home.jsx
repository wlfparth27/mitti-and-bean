import Navbar from "../components/layout/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <main>
        <section className="hero" id="home">
          <div className="hero__inner container">
            <div className="hero__content fade-in">
              <span className="hero__eyebrow">
                Coffee · Food · Community
              </span>

              <h1 className="hero__title">
                A little piece of <em>home.</em>
              </h1>

              <p className="hero__description">
                Thoughtfully brewed coffee, comforting food, and a warm
                space to slow down, catch up, and stay awhile.
              </p>

              <div className="hero__actions">
                <a
                  className="hero__button hero__button--primary"
                  href="#menu"
                >
                  Explore the Menu
                </a>

                <a
                  className="hero__button hero__button--secondary"
                  href="#reserve"
                >
                  Reserve a Table
                </a>
              </div>
            </div>

            <div className="hero__visual fade-in">
              <div
                className="hero__image-placeholder"
                aria-label="Mitti & Bean café"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;