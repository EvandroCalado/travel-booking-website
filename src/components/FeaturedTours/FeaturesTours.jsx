import tourData from "../../assets/data/tours";
import TourCard from "../../shared/TourCard";
import { Col } from "react-bootstrap";

const FeaturedTourList = () => {
  return (
    <>
      {tourData?.map((tour) => (
        <Col className="mb-4" key={tour.id} lg="3">
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
