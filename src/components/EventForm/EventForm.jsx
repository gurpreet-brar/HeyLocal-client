import "./EventForm.scss";
import err from "../../assets/icons/error-24px.svg";
import { useState } from "react";

function EventForm({
  handleFormSubmit,
  handleImageChange,
  address,
  setAddress,
  formInput,
  setFormInput,
  error,
}) {
  const categories = [
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

  const [fileName, setFileName] = useState(null);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
    if (name === "image" && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form__tab">
        <label className="form__label" htmlFor="title">
          Title
        </label>
        <input
          className="form__input"
          type="text"
          name="title"
          id="title"
          placeholder="Please enter title"
          value={formInput.title}
          onChange={handleChange}
        />
        {error.titleError && (
          <p>
            <img src={err} />
            {error.titleError}
          </p>
        )}
      </div>
      <div className="form__tab">
        <label className="form__label" htmlFor="desc">
          Description
        </label>
        <textarea
          className="form__textarea"
          type="text"
          name="description"
          id="desc"
          placeholder="Please enter description"
          value={formInput.description}
          onChange={handleChange}
        />
        {error.descError && (
          <p>
            {" "}
            <img src={err} />
            {error.descError}
          </p>
        )}
      </div>
      <div className="form__tab">
        <label className="form__label" htmlFor="category">
          Category
        </label>
        <select
          className="form__input form__select"
          name="category"
          id="category"
          value={formInput.category}
          onChange={handleChange}
        >
          <option value="" disabled>
            Please select
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        {error.categoryError && (
          <p>
            <img src={err} />
            {error.categoryError}
          </p>
        )}
      </div>
      <div className="form__tab">
        <label className="form__label" htmlFor="location">
          Location
        </label>
        <input
          className="form__input"
          type="text"
          name="location"
          id="location"
          placeholder="Please enter the location for the event"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {error.locationError && (
          <p>
            <img src={err} />
            {error.locationError}
          </p>
        )}
      </div>

      <div className="form__tab">
        <label className="form__label" htmlFor="date">
          Date of event
        </label>
        <input
          className="form__input"
          type="date"
          name="date"
          id="date"
          placeholder="Please enter date of event"
          value={formInput.date}
          onChange={handleChange}
        />
        {error.dateError && (
          <p>
            <img src={err} />
            {error.dateError}
          </p>
        )}
      </div>
      <div className="form__tab">
        <label className="form__label" htmlFor="time">
          Time of Event
        </label>
        <input
          className="form__input"
          type="time"
          name="time"
          id="time"
          value={formInput.time}
          onChange={handleChange}
        />
        {error.timeError && (
          <p>
            <img src={err} />
            {error.timeError}
          </p>
        )}
      </div>
      <div className="form__tab">
        <label className="form__label" htmlFor="duration">
          Enter duration in minutes
        </label>
        <input
          className="form__input"
          type="number"
          name="duration"
          id="duration"
          placeholder="Please enter the duration of event"
          value={formInput.duration}
          onChange={handleChange}
        />
        {error.timeError && (
          <p>
            <img src={err} />
            {error.timeError}
          </p>
        )}
      </div>
      <div className="form__tab">
        <label className="form__label" htmlFor="spots">
          Number of available spots
        </label>
        <input
          className="form__input"
          type="number"
          name="total_spots"
          id="spots"
          placeholder="Please enter number of available spots"
          value={formInput.total_spots}
          onChange={handleChange}
        />
        {error.spotsError && (
          <p>
            <img src={err} />
            {error.spotsError}
          </p>
        )}
      </div>
      <div className="form__tab">
        <label className="form__label" htmlFor="chat_link">
          {" "}
          Enter event chat link
        </label>
        <input
          className="form__input"
          type="url"
          name="chat_link"
          id="chat_link"
          placeholder="Please enter chat link"
          value={formInput.chat_link}
          onChange={handleChange}
        />
        {error.chatError && (
          <p>
            {" "}
            <img src={err} />
            {error.chatError}
          </p>
        )}
      </div>
      <div className="form__tab file-upload">
        <label className="form__label file-upload__button" htmlFor="image">
          Upload Event image
        </label>
        <input
          className="form__input"
          type="file"
          name="image"
          id="image"
          accept=".jpg, .jpeg, .png"
          onChange={(event) => {
            handleImageChange(event);
            handleChange(event);
          }}
        />
        <span className="file-upload__filename">
          {fileName || "No file Chosen"}
        </span>
        {error.imageError && (
          <p>
            {" "}
            <img src={err} />
            {error.imageError}
          </p>
        )}
      </div>
      <div className="form__button">
        <button className="form__button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default EventForm;
