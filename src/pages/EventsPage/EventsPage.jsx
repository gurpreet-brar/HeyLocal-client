import "./EventsPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function EventsPage() {
  const base_url = import.meta.env.VITE_API_URL;
  const [events, setEvents] = useState(null);

  const getEvents = async () => {
    try {
      const response = await axios.get(`${base_url}/events`);
      console.log(response.data);
      setEvents(response.data);
    } catch (error) {
      console.log("Error getting events", error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);
  return <main className="events__main"></main>;
}

export default EventsPage;
