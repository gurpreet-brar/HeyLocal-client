import "./AddEventPage.scss";
import Map from "../../components/Map/Map";
import EventForm from "../../components/EventForm/EventForm";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

function AddEventPage() {
  const cloud_url = import.meta.env.VITE_CLOUDINARY_URL;
  const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;

  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [image, setImage] = useState(null);
  const [formInput, setFormInput] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    time: "",
    duration: "",
    spots: "",
    chat_link: "",
  });
  const [error, setError] = useState({
    titleError: false,
    descError: false,
    categoryError: false,
    locationError: false,
    dateError: false,
    timeError: false,
    durationError: false,
    spotsError: false,
    imageError: false,
    chatError: false,
  });

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    if (image) {
      setImage(image);
    }
  };

  const isTitleValid = () => {
    if (!formInput.title.trim()) {
      setError((prev) => ({ ...prev, titleError: "This field is required" }));
      return false;
    }
    setError((prev) => ({ ...prev, titleError: false }));
    return true;
  };

  const isDescValid = () => {
    if (!formInput.description.trim()) {
      setError((prev) => ({ ...prev, descError: "This field is required" }));
      return false;
    }
    setError((prev) => ({ ...prev, descError: false }));
    return true;
  };

  const isCategoryValid = () => {
    if (!formInput.category) {
      setError((prev) => ({
        ...prev,
        categoryError: "This field is required",
      }));
      return false;
    }
    setError((prev) => ({ ...prev, categoryError: false }));
    return true;
  };

  const isDateValid = () => {
    if (!formInput.date) {
      setError((prev) => ({ ...prev, dateError: "This field is required" }));
      return false;
    }
    setError((prev) => ({ ...prev, dateError: false }));
    return true;
  };

  const isSpotsValid = () => {
    if (!formInput.spots) {
      setError((prev) => ({ ...prev, spotsError: "This field is required" }));
      return false;
    }
    if (formInput.spots <= 0) {
      setError((prev) => ({
        ...prev,
        spotsError: "Please enter a valid number",
      }));
      return false;
    }
    setError((prev) => ({ ...prev, spotsError: false }));
    return true;
  };

  const isDurationValid = () => {
    if (!formInput.duration) {
      setError((prev) => ({
        ...prev,
        durationError: "This field is required",
      }));
      return false;
    }
    if (formInput.duration <= 0) {
      setError((prev) => ({
        ...prev,
        spotsError: "Please enter valid duration in minutes",
      }));
      return false;
    }
    setError((prev) => ({ ...prev, durationError: false }));
    return true;
  };

  const isTimeValid = () => {
    if (!formInput.time) {
      setError((prev) => ({ ...prev, timeError: "This field is required" }));
      return false;
    }
    setError((prev) => ({ ...prev, timeError: false }));
    return true;
  };

  const isChatLinkValid = () => {
    if (!formInput.chat_link.trim()) {
      setError((prev) => ({ ...prev, chatError: "This field is required" }));
      return false;
    }
    setError((prev) => ({ ...prev, chatError: false }));
    return true;
  };

  const isImageValid = () => {
    if (!image) {
      setError((prev) => ({ ...prev, imageError: "Please upload an image" }));
      return false;
    }
    setError((prev) => ({ ...prev, imageError: false }));
    return true;
  };

  const isAddressValid = () => {
    if (!address.trim()) {
      setError((prev) => ({
        ...prev,
        locationError: "This field is required",
      }));
      return false;
    }
    setError((prev) => ({ ...prev, locationError: false }));
    return true;
  };

  const isFormValid = () => {
    if (
      !isTitleValid() ||
      !isDescValid() ||
      !isCategoryValid() ||
      !isAddressValid() ||
      !isDateValid() ||
      !isTimeValid() ||
      !isDurationValid() ||
      !isSpotsValid() ||
      !isChatLinkValid() ||
      !isImageValid()
    ) {
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", upload_preset);
    const response = await axios.post(cloud_url, formData);
    console.log(response.data);
    const imageUrl = response.data.secure_url;

    const data = { ...formInput, image: imageUrl, address };
    console.log(data);
    toast("Event details successfully submitted!!");
    setFormInput({
      title: "",
      description: "",
      category: "",
      date: "",
      time: "",
      duration: "",
      spots: "",
      chat_link: "",
    });
    setAddress("");
    setCoordinates(null);
    setImage(null);
  };

  return (
    <main className="add__main">
      <section className="form__wrapper">
        <EventForm
          handleFormSubmit={handleFormSubmit}
          image={image}
          handleImageChange={handleImageChange}
          address={address}
          setAddress={setAddress}
          formInput={formInput}
          setFormInput={setFormInput}
          error={error}
        />
        <ToastContainer position="top-left" />

        <Map
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
