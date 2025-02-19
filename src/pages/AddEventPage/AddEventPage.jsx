import "./AddEventPage.scss";
import Map from "../../components/Map/Map";
import { useState } from "react";
import axios from "axios";

function AddEventPage() {
  const google_api_key = import.meta.env.VITE_MAPS_API_KEY;
  const cloud_url = import.meta.env.VITE_CLOUDINARY_URL;
  const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
  const Category = [
    "Welness",
    "Dance",
    "Music & Arts",
    "Entertainment",
    "Crafts & Hobbies",
    "Educational",
    "Business",
    "Social Impact",
    "Technology",
    "Sports",
  ];
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    if (image) {
      setImage(image);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", upload_preset);
    const response = await axios.post(cloud_url, formData);
    console.log(response.data);
  };

  return (
    <main className="add__main">
      <section className="form__wrapper">
        <form className="form" onSubmit={handleFormSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Please enter title"
          />
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="description"
            id="desc"
            placeholder="Please enter description"
          />
          <label htmlFor="category">Category</label>
          <select name="category" id="category" defaultValue="">
            <option value="" disabled>
              Please select
            </option>
            {Category.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Please enter the location for the event"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="date">Date of event</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Please enter date of event"
          />
          <label htmlFor="time">Time of Event</label>
          <input type="time" name="time" id="time" />
          <label htmlFor="duration">Enter duration in minutes</label>
          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="Please enter the duration of event"
          />
          <label htmlFor="spots">Number of available spots</label>
          <input
            type="number"
            name="spots"
            id="spots"
            placeholder="Please enter number of available spots"
          />
          <label htmlFor="image">Upload Event image</label>
          <input
            type="file"
            name="image"
            id="image"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageChange}
          />
          <button type="submit">Submit</button>
        </form>
        <Map
          address={address}
          setAddress={setAddress}
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          isEditable={true}
        />
      </section>
    </main>
  );
}

export default AddEventPage;
