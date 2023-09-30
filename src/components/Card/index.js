import Card from "react-bootstrap/Card";
import { Cards, Details, Meses, CardTitle } from "./styled";

function CardHome({ image, title, description, URL, day, month }) {
  return (
    <Cards href={URL}>
      <Card style={{ width: "18rem", boxShadow:"2px 2px 2px 2px rgba(0, 0, 0, 0.2)"
 }}>
        <Card.Img variant="top" src={image} />
        <CardTitle>{title}</CardTitle>
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
  );
}

export default CardHome;
