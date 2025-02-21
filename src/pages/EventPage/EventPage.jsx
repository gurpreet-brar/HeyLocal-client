import "./EventPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Map from "../../components/Map/Map";
import axios from "axios";

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const base_url = import.meta.env.VITE_API_URL;

  const getEvent = async () => {
    try {
      const response = await axios.get(`${base_url}/events/${id}`);
      console.log(response.data);
      setEvent(response.data);
    } catch (error) {
      console.log("Error getting event details", error);
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

  useEffect(() => {
    getEvent();
  }, [id]);

  return (
    event && (
      <main className="event__main">
        <div className="event__image">
          <img src={event.image_url} alt={event.title} />
          <h3>{event.title}</h3>
        </div>
        <div className="event__desc">
          <p>{event.description}</p>
        </div>
        <div className="event__info">
          <p>Venue : {event.location}</p>
          <p>
            Date and Time: {`${getDate(event.date)}`} at{" "}
            {`${getTime(event.time)}`}
          </p>
          <p>Duration : {event.duration} minutes</p>
        </div>
        <div className="event__location">
          <div className="event__address">
            <h3>Getting there</h3>
            <p>{event.location}</p>
          </div>
          <div className="event__map">
            {event && <Map address={event.location} />}
          </div>
        </div>
      </main>
    )
  );
}

export default EventPage;
