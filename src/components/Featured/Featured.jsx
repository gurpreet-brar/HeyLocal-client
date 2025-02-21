import "./Featured.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Featured() {
  const base_url = import.meta.env.VITE_API_URL;
  const [featuredEvents, setFeaturedEvents] = useState(null);

  const getFeaturedEvents = async () => {
    try {
      const response = await axios.get(`${base_url}/events/featured`);
      setFeaturedEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    getFeaturedEvents();
  }, []);
  return (
    <section className="featured">
      <h3 className="featured__title">Featured</h3>
      <div className="featured__events">
        {featuredEvents && (
          <div className="featured__container">
            <div
              className="featured__main"
              style={{ backgroundImage: `url(${featuredEvents[0].image_url})` }}
            >
              <h1>{featuredEvents[0].title}</h1>
              <p>{getDate(featuredEvents[0].date)}</p>
              <a href={`/event/${featuredEvents[0].event_id}`} className="btn">
                View Event
              </a>
            </div>
            <div className="featured__carousel">
              {featuredEvents.map((event) => (
                <div key={event.event_id} className="featured__event-card">
                  <img src={event.image_url} alt={event.title} />
                  <h3>{event.title}</h3>
                  <p>{getDate(event.date)}</p>
                  <Link to={`/event/${event.event_id}`}>View Details</Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Featured;
