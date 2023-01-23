import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";
import { Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Previsão do tempo",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imgUrl: guideImg,
    title: "Melhor Guia de Turismo",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imgUrl: customizationImg,
    title: "Customização",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
