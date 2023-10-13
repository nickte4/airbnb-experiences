import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <img className="hero--images" src="src/assets/photo-grid.png" alt="" />
        <h1 className="hero--title">Online Experiences</h1>
        <p className="hero--desc">
          Join unique interactive activities led by <br />
          one-of-a-kind hosts-all without leaving <br />
          home.
        </p>
      </div>
    </>
  );
}

export default Hero;
