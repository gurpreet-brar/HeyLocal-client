import "./EventsPage.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import axios from "axios";

function EventsPage() {
  const base_url = import.meta.env.VITE_API_URL;
  const [searchParams] = useSearchParams();
  const [events, setEvents] = useState(null);
  const searchedCategory = searchParams.get("category") || "";

  const getEvents = async () => {
    try {
      const response = await axios.get(`${base_url}/events`);
      console.log(response.data);
      setEvents(response.data);
    } catch (error) {
      console.log("Error getting events", error);
    }
  };

  const getFilteredEvents = async (category) => {
    if (!category) {
      getEvents();
      return;
    }
    try {
      const response = await axios.get(
        `${base_url}/events?category=${category}`
      );
      console.log(response.data);
      setEvents(response.data);
    } catch (error) {
      console.log("Error getting events", error);
    }
  };

  useEffect(() => {
    if (searchedCategory) {
      getFilteredEvents(searchedCategory);
    } else {
      getEvents();
    }
  }, [searchedCategory]);

  const getDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getTime = (time) => {
    const [hour, minute, second] = time.split(":");
    const date = new Date();
    date.setHours(hour, minute, second);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };
  return (
    events && (
      <main className="events__main">
        <Search
          getFilteredEvents={getFilteredEvents}
          defaultCategory={searchedCategory}
        />
        <section className="events__wrapper">
          {events.length === 0 && <p>No events found</p>}
          {events.map((event) => (
            <div key={event.id} className="event__card">
              <img
                src={event.image_url}
                alt={event.title}
                className="event__image"
              />
              <div className="event__info">
                <h2>{event.title}</h2>
                <p>
                  {`${getDate(event.date)}`} | {event.location}
                </p>
                <Link to={`/event/${event.id}`}>
                  <button className="event__button">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    )
  );
}

export default EventsPage;
