import "./HomePage.scss";
import Featured from "../../components/Featured/Featured";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Options from "../../components/Options/Options";

function HomePage() {
  return (
    <main className="home__main">
      <Hero />
      <Featured />
      <Categories />
      <Options />
    </main>
  );
}

export default HomePage;
