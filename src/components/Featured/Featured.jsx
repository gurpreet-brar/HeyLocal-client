import "./Featured.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="featured">
      <h3 className="featured__title">Top events</h3>
      <div className="featured__events">
        {featuredEvents && (
          <div className="featured__container">
            <div
              className="featured__main"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${featuredEvents[0].image_url})`,
              }}
            >
              <h1 className="featured__main-header">
                {featuredEvents[0].title}
              </h1>
              <p className="featured__main-info">
                {getDate(featuredEvents[0].date)}
              </p>
              <a
                className="featured__main-link"
                href={`/event/${featuredEvents[0].event_id}`}
              >
                View Event
              </a>
            </div>
            <Slider {...settings} className="featured__carousel">
              {featuredEvents.slice(1).map((event) => (
                <div key={event.event_id} className="featured__event-card">
                  <img
                    className="event-card__image"
                    src={event.image_url}
                    alt={event.title}
                  />
                  <h3 className="event-card__title">{event.title}</h3>
                  <p className="event-card__info">{getDate(event.date)}</p>
                  <Link
                    className="event-card__link"
                    to={`/event/${event.event_id}`}
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
}

export default Featured;
