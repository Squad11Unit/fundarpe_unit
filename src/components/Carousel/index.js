import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "./styled";
import { imagens } from "./imagens";

function CarouselHome({ description, title, detail }) {
  return (
    <Container>
      <Carousel fade>
        {imagens.map(({ name, image }) => (
          <Carousel.Item key={name}>
            <img src={image} alt={name} />
            <Carousel.Caption>
              <h4>{title}</h4>
              <h5>{detail}</h5>
              <p>{description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default CarouselHome;
