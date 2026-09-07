import { useState } from "react";
import { menuCategories } from "../../data/menu";
import "./MenuSection.css";

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(
    menuCategories[0].id
  );

  const currentCategory = menuCategories.find(
    (category) => category.id === activeCategory
  );

  return (
    <section className="menu-section" id="menu">
      <div className="menu-section__inner container">
        <div className="menu-section__header">
          <div>
            <span className="menu-section__eyebrow">
              The Menu
            </span>

            <h2 className="menu-section__title">
              Something for every kind of day.
            </h2>
          </div>

          <p className="menu-section__intro">
            From the first coffee of the morning to something sweet
            in the afternoon, our menu is made to be enjoyed slowly.
          </p>
        </div>

        <div className="menu-section__tabs" role="tablist">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`menu-section__tab ${
                activeCategory === category.id
                  ? "menu-section__tab--active"
                  : ""
              }`}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-section__category">
          <div className="menu-section__category-header">
            <h3>{currentCategory.name}</h3>

            <p>{currentCategory.description}</p>
          </div>

          <div className="menu-section__items">
            {currentCategory.items.map((item) => (
              <article className="menu-item" key={item.id}>
                <div className="menu-item__content">
                  <h4 className="menu-item__name">
                    {item.name}
                  </h4>

                  <p className="menu-item__description">
                    {item.description}
                  </p>
                </div>

                <span className="menu-item__price">
                  ₹{item.price}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;