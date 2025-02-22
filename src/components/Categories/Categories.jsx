import "./Categories.scss";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Wellness",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740198490/wellness_s5b08g.png",
  },
  {
    name: "Dance",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740198490/dance_xtsddp.png",
  },
  {
    name: "Music & Arts",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740198490/music_rqkfcg.png",
  },
  {
    name: "Entertainment",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740198490/entertainment_fgisje.png",
  },
  {
    name: "Crafts & Hobbies",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740198768/watercolor_ao9aos.png",
  },
  {
    name: "Educational",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740198490/education_ptklgn.png",
  },
  {
    name: "Business",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740198490/business_munwap.png",
  },
  {
    name: "Social Impact",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740198490/social_chodbr.png",
  },
  {
    name: "Technology",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740198490/tech_mlgokp.png",
  },
  {
    name: "Sports",
    image:
      "https://res.cloudinary.com/dxtynrye0/image/upload/v1740198490/sports_awfy2t.png",
  },
];

function Categories() {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`/events?category=${category}`);
  };
  return (
    <section className="categories">
      <h2 className="categories__title">Explore Categories</h2>
      <div className="categories__container">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-card"
            onClick={() => handleClick(cat.name)}
          >
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
