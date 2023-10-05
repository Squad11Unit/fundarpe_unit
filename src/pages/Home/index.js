import CardHome from "../../components/Card";
import CarouselHome from "../../components/Carousel";
import Header from "../../components/Header";
import { SelectGroup, CardBox, ContainerHome } from "./styled";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { meses, categorias } from "./constants";
import { editalCard } from "../../components/Card/editalCard";
import { eventsCard } from "../../components/Card/eventsCard";

function Home() {
  return (
    <ContainerHome>
      <Header
        userName="Ana Silva"
        institutions="Institucionais"
        buttonRegister="Registrar-se"
        buttonLogout="Sair"
        login="Iniciar Sessão"
      />
      <CarouselHome
        title="Iniciativa do Governo de Pernambuco"
        detail="voltada para o apoio e promoção da cultura no estado"
        description="A Funcultura atua através de editais lançadas anualmente, essas oportunidades disponibilizam recursos do governo do Estado para artistas e produtores culturais para a realização de projetos em diversas áreas, visando fortalecer a cultura de Pernambuco."
      />
      <h1>Novos Editais</h1>
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
        {editalCard.map((item) => (
          <CardHome
            key={item.id}
            URL={item.URL}
            text={item.text}
            title={item.title}
            image={item.image}
            month={item.month}
            day={item.day}
            description={item.description}
          />
        ))}
      </CardBox>
      <button>Ver mais</button>

      {/* :TODO SOBRE-FUNCULTURA */}

      <h1>Eventos</h1>
      <CardBox>
        {eventsCard.map((item) => (
          <CardHome
            key={item.id}
            URL={item.URL}
            text={item.text}
            title={item.title}
            image={item.image}
            month={item.month}
            day={item.day}
            description={item.description}
          />
        ))}
      </CardBox>
    </ContainerHome>
  );
}

export default Home;
