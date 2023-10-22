import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import data from "./data.js";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        image={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards--list">{cards}</section>
    </>
  );
}

export default App;
