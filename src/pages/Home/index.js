import CardHome from "../../components/Card";
import CarouselHome from "../../components/Carousel";
import Header from "../../components/Header";
import { H1, SelectGroup, CardBox } from "./styled";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { meses, categorias } from "./constants";

function Home() {
  return (
    <div>
      <Header />
      <CarouselHome
        title="Iniciativa do Governo de Pernambuco"
        detail="voltada para o apoio e promoção da cultura no estado"
        description="A Funcultura atua através de editais lançadas anualmente, essas oportunidades disponibilizam recursos do governo do Estado para artistas e produtores culturais para a realização de projetos em diversas áreas, visando fortalecer a cultura de Pernambuco."
      />
      <H1>Novos Editais</H1>
      <SelectGroup>
        <DropdownButton title="Mês">
          {meses.map((mes, index) => (
            <Dropdown.ItemText key={index}>{mes}</Dropdown.ItemText>
          ))}
        </DropdownButton>
        <DropdownButton title="Categoria do Edital">
          {categorias.map((categoria, index) => (
            <Dropdown.ItemText key={index}>{categoria}</Dropdown.ItemText>
          ))}
        </DropdownButton>
      </SelectGroup>
      <CardBox>
        <CardHome />
        <button>Ver mais</button>
      </CardBox>
    </div>
  );
}

export default Home;
