import Card from "react-bootstrap/Card";
import { Cards, Details, Meses, CardTitle, ContainerCard } from "./styled";
import { editalCard } from "./editalCard";

function CardHome() {
  return (
    <ContainerCard>
      {editalCard.map((item) => (
        <Cards key={item.id} href={URL}>
          <Card
            style={{
              width: "18rem",
              boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
              width: "349px",
            }}
          >
            <Card.Img variant="top" src={item.image} alt={item.text} />
            {item.title && (
              <CardTitle style={{ margin: "22px 0" }}>{item.title}</CardTitle>
            )}
            <Card.Body>
              <Details>
                <Meses>
                  <h6>{item.month}</h6>
                  <h2>{item.day}</h2>
                </Meses>
                <Card.Text>{item.description}</Card.Text>
              </Details>
            </Card.Body>
          </Card>
        </Cards>
      ))}
    </ContainerCard>
  );
}

export default CardHome;
