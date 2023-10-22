import "./Card.css";

function Card(props) {
  let status;
  if (props.openSpots == 0) {
    status = "SOLD OUT";
  } else if (props.location == "Online") {
    status = "ONLINE";
  }

  return (
    <>
      <div className="card">
        {status && (
          <div className="card--status">
            <strong>{status}</strong>
          </div>
        )}
        <img
          src={`src/assets/${props.coverImg}`}
          alt="cover img"
          className="card--image"
        />
        <div className="card--subtitle">
          <div className="card--rating_and_reviews">
            <img className="card--star" src="src/assets/star.png" alt="star" />
            <p className="card--rating">{props.stats.rating}</p>
            <p className="card--review_and_location">
              ({props.stats.reviewCount})• {props.location}
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
