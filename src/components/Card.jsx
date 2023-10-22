import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card--status">
          <p>SOLD OUT</p>
        </div>
        <img
          src="src/assets/katie-zaferes.png"
          alt="img of katie zaferes"
          className="card--image"
        />
        <div className="card--subtitle">
          <div className="card--rating_and_reviews">
            <img className="card--star" src="src/assets/star.png" alt="star" />
            <p className="card--rating">5.0</p>
            <p className="card--review_and_location">(6)•USA</p>
          </div>
          <p className="card--desc">Life lessons with Katie Zaferes</p>
          <p className="card--price">
            <strong>From $136</strong> / person
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
