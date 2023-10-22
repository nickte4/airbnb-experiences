import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card--status">
          <p>SOLD OUT</p>
        </div>
        <img
          src={`src/assets/${props.image}`}
          alt="img of katie zaferes"
          className="card--image"
        />
        <div className="card--subtitle">
          <div className="card--rating_and_reviews">
            <img className="card--star" src="src/assets/star.png" alt="star" />
            <p className="card--rating">{props.rating}</p>
            <p className="card--review_and_location">
              ({props.reviewCount})• {props.location}
            </p>
          </div>
          <p className="card--desc">{props.title}</p>
          <p className="card--price">
            <strong>From ${props.price}</strong> / person
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
