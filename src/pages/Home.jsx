import "../styles/Home.css";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import { Col, Container, Row } from "react-bootstrap";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/FeaturedTours/FeaturesTours";
import experienceImg from "../assets/images/experience.png"

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Saiba antes de Ir"} />
                  <img src={worldImg} alt="World image" />
                </div>
                <h1>
                  Solte sua imaginação e crie
                  <span className="highlight"> memorias</span>
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                  quisquam aliquam veniam quos dolor ducimus molestiae,
                  praesentium iure mollitia alias laboriosam, quae fuga
                  laudantium sapiente, tempore error dolores a unde!
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="Hero Image" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="Hero Video" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="Hero Image" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">O que servimos</h5>
              <h2 className="services__title">
                Oferecemos nossos melhores serviços
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Nossas caracteristicas</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experiência"} />
                <h2>
                  Com toda nossa experiência <br />
                  vamos realizar seu sonho
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Viagens realizadas</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Clientes Regulares</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Anos de experiência</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="Experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Caleria"} />
              <h2 className="gallery__title">
                Visite a galeria dos nossos clientes
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
