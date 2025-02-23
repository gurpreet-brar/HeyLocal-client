import "./PastEvents.scss";
import Slider from "react-slick";

const pastEvents = [
  {
    id: 1,
    name: "Group Music class",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740253051/qmusphqq7qig1fgjvh5w.webp",
  },
  {
    id: 2,
    name: "Group Fitness Class",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740254585/ygdvx627tkbatcsqkiay.png",
  },
  {
    id: 3,
    name: "Sip and Paint",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740254419/naww5ox14atmqgyclr4s.webp",
  },
  {
    id: 4,
    name: "Music Fest",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740254246/syiooqrqjevlrejwl3e0.jpg",
  },
  {
    id: 5,
    name: "Chat and Crochet",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740254478/jyeeefqmeweadvzps7eu.webp",
  },
  {
    id: 6,
    name: "Dance Event",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740254678/lbch04p0x7bleza041bd.jpg",
  },
];

function PastEvents() {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };
  return (
    <section className="past-events">
      <h2 className="past-events__title">From the Archives: A Look Back</h2>
      <Slider {...settings} className="past-events__carousel">
        {pastEvents.map((event) => (
          <div key={event.id} className="past-events__card">
            <img
              src={event.image}
              alt={event.name}
              className="past-events__image"
            />
            <div className="past-events__overlay">
              <h3 className="past-events__name">{event.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default PastEvents;
