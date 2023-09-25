import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import recife from "../../Assets/Principal/recife.png";
import bezerros from "../../Assets/Principal/bezerros.png";
import nazareDaMata from "../../Assets/Principal/NazareDaMata.png";
import caruaru from "../../Assets/Principal/Caruaru.png";
import gravata from "../../Assets/Principal/Gravata.png";
import { Container } from "./styled"; 

function CarouselHome({ description, title, detail }) {
  return (
    <Container>
      <Carousel fade>
        <Carousel.Item>
          <img src={recife} alt="Imagens de Recife" />
          <Carousel.Caption>
            <h4>{title}</h4>
            <span>{detail}</span>
            <p>{description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={bezerros} alt="Papangus de Bezerros" />
          <Carousel.Caption>
          <h4>{title}</h4>
            <span>{detail}</span>
            <p>{description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={nazareDaMata} alt="Caboclo de Lança, Nazaré da Mata" />
          <Carousel.Caption>
          <h4>{title}</h4>
            <span>{detail}</span>
            <p>{description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={caruaru} alt="Festividade de São joão em Caruaru" />
          <Carousel.Caption>
          <h4>{title}</h4>
            <span>{detail}</span>
            <p>{description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={gravata} alt="Imagem da praça do relógio em Gravatá" />
          <Carousel.Caption>
          <h4>{title}</h4>
            <span>{detail}</span>
            <p>{description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselHome;
