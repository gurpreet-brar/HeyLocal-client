import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <video autoPlay loop muted className="hero__video">
        <source src="/HeyLocal.mp4" type="video/mp4" />
      </video>
      <div className="hero__overlay"></div>
    </section>
  );
}

export default Hero;
