import "./EventPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    getEvent();
  }, [id]);

  return <main className="event__main"></main>;
}

export default EventPage;
