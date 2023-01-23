import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourCard.css";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, reviews } = tour;

  const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
    totalRating === 0
      ? ""
      : totalRating === 1
      ? totalRating
      : totalRating / reviews?.length;

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="Tour Image" />
          {featured && <span>Característica</span>}
        </div>
        <Card.Body>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>{" "}
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Não avaliado"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>
          <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              R${price} <span>/por pessoa</span>
            </h5>
            <button className="btn booking__btn">
              <Link to={`/tours/${id}`}>Reserve</Link>
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TourCard;
