import "./EventForm.scss";
import err from "../../assets/icons/error-24px.svg";

function EventForm({
  handleFormSubmit,
  image,
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label htmlFor="title">Title</label>
      <input
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

      <label htmlFor="desc">Description</label>
      <input
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

      <label htmlFor="category">Category</label>
      <select
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

      <label htmlFor="location">Location</label>
      <input
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

      <label htmlFor="date">Date of event</label>
      <input
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

      <label htmlFor="time">Time of Event</label>
      <input
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

      <label htmlFor="duration">Enter duration in minutes</label>
      <input
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
      <label htmlFor="spots">Number of available spots</label>
      <input
        type="number"
        name="spots"
        id="spots"
        placeholder="Please enter number of available spots"
        value={formInput.spots}
        onChange={handleChange}
      />
      {error.spotsError && (
        <p>
          <img src={err} />
          {error.spotsError}
        </p>
      )}
      <label htmlFor="chat_link"> Enter event chat link</label>
      <input
        type="url"
        name="chat_link"
        id="chat_link"
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
      <label htmlFor="image">Upload Event image</label>
      <input
        type="file"
        name="image"
        id="image"
        accept=".jpg, .jpeg, .png"
        onChange={handleImageChange}
      />
      {error.imageError && (
        <p>
          {" "}
          <img src={err} />
          {error.imageError}
        </p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default EventForm;
