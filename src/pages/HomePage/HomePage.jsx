import "./HomePage.scss";
import Featured from "../../components/Featured/Featured";
import Hero from "../../components/Hero/Hero";

function HomePage() {
  return (
    <main className="home__main">
      <Hero />
      <Featured />
    </main>
  );
}

export default HomePage;
