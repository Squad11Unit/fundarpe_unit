import Card from "react-bootstrap/Card";
import { Cards, Details, Meses, CardTitle, ContainerCard } from "./styled";

function CardHome({ URL, image, text, title, month, day, description }) {
  return (
    <ContainerCard>
      <Cards href={URL}>
        <Card
          style={{
            width: "21.813rem",
            boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Card.Img variant="top" src={image} alt={text} />
          {title && <CardTitle style={{ margin: "22px 0" }}>{title}</CardTitle>}
          <Card.Body>
            <Details>
              <Meses>
                <h6>{month}</h6>
                <h2>{day}</h2>
              </Meses>
              <Card.Text>{description}</Card.Text>
            </Details>
          </Card.Body>
        </Card>
      </Cards>
    </ContainerCard>
  );
}

export default CardHome;
