import "./Options.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Options() {
  const [activeTab, setActiveTab] = useState("join");
  const navigate = useNavigate();

  return (
    <section className="options">
      <h2 className="options__title">
        Discover. Join. Host. Your Next Event Awaits!
      </h2>

      <div className="options__tabs">
        <button
          className={`tab ${activeTab === "join" ? "active" : ""}`}
          onClick={() => setActiveTab("join")}
        >
          Join an Event
        </button>
        <button
          className={`tab ${activeTab === "host" ? "active" : ""}`}
          onClick={() => setActiveTab("host")}
        >
          Host an Event
        </button>
      </div>

      <div className="options__content">
        {activeTab === "join" ? (
          <div className="join-content">
            <p className="content__text">
              Find amazing events happening near you and be part of the
              experience.
            </p>
            <button className="join-btn" onClick={() => navigate("/events")}>
              Browse Events
            </button>
          </div>
        ) : (
          <div className="host-content">
            <p className="content__text">
              Host an event and connect with people who share your passion.
            </p>
            <button className="host-btn" onClick={() => navigate("/event/add")}>
              Create an Event
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Options;
