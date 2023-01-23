import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourCard.css";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, avgRating, reviews } = tour;

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="Tour Image" />
          <span>Característica</span>
        </div>
      </Card>
      <Card.Body>
        <div className="card__top d-flex align-items-center justift-content-between">
          <span className="tour__location d-flex align-items-center gap-1">
            <i className="ri-map-pin-line"></i> {city}
          </span>
          <span className="tour__rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> {avgRating}{" "}
            <span>({reviews.lenth})</span>
          </span>
        </div>
        <h5 className="tour__title">
          <Link to={`/tours/${id}`}>{title}</Link>
        </h5>
        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
          <h5>
            ${price} <span>/por pessoa</span>
          </h5>
          <button className="btn booking__btn">
            <Link to={`/tours/${id}`}>Reserve agora</Link>
          </button>
        </div>
      </Card.Body>
    </div>
  );
};

export default TourCard;
