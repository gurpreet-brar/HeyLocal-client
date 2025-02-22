import "./HomePage.scss";
import Featured from "../../components/Featured/Featured";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";

function HomePage() {
  return (
    <main className="home__main">
      <Hero />
      <Featured />
      <Categories />
    </main>
  );
}

export default HomePage;
