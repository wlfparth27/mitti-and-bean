import { useState } from "react";
import "./ReservationSection.css";

function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Reservation submitted:", formData);

    alert("Thank you! Your reservation request has been received.");
  };

  return (
    <section className="reservation-section" id="reserve">
      <div className="reservation-section__inner container">
        <div className="reservation-section__intro">
          <span className="reservation-section__eyebrow">
            Reservations
          </span>

          <h2 className="reservation-section__title">
            Save a seat
            <br />
            for yourself.
          </h2>

          <p className="reservation-section__description">
            Planning a breakfast with friends, a quiet coffee date,
            or simply want to make sure you have a table waiting?
            Send us a reservation request.
          </p>

          <p className="reservation-section__note">
            For larger groups or special occasions, please mention
            the details in your message and we'll get back to you.
          </p>
        </div>

        <form
          className="reservation-form"
          onSubmit={handleSubmit}
        >
          <div className="reservation-form__row">
            <div className="reservation-form__field">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="reservation-form__field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="reservation-form__row">
            <div className="reservation-form__field">
              <label htmlFor="date">Date</label>

              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-form__field">
              <label htmlFor="time">Time</label>

              <input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="reservation-form__field">
            <label htmlFor="guests">Number of Guests</label>

            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5 guests</option>
              <option value="6">6 guests</option>
              <option value="7">7 guests</option>
              <option value="8">8 guests</option>
            </select>
          </div>

          <div className="reservation-form__field">
            <label htmlFor="message">
              Anything we should know?
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Birthday, window seat, dietary requirements..."
              rows="4"
            />
          </div>

          <button
            className="reservation-form__submit"
            type="submit"
          >
            Request a Table
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReservationSection;