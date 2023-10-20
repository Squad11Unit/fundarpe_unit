import CardHome from "../../components/Card";
import CarouselHome from "../../components/Carousel";
import Header from "../../components/Header";
import { SelectGroup, CardBox, ContainerHome } from "./styled";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { meses, categorias } from "./constants";
import { editalCard } from "../../components/Card/editalCard";
import { eventsCard } from "../../components/Card/eventsCard";
import Banner1 from "../../assets/Principal/banner/Banner1.png";
import Banner2 from "../../assets/Principal/banner/Banner2.png";


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
      <button className={"b1"}>Ver mais.</button>

      {/* :TODO SOBRE-FUNCULTURA <h1>O funcultura</h1> */}
      <h1>Funcultura</h1>

      <div className={"flex_container"}>
        <div className={"flex_section"}>
          <div className={"flex_imag"}>
            <div>
              <img
                className="bloco_1"
                width="401"
                height="200"
                src={Banner1}
                alt="rvrfvfgrvfgr"
              ></img>
            </div>
            <img
              className="bloco_3"
              width="401"
              height="200"
              src={Banner2}
              alt="rvrfvfgrvfgr"
            ></img>
          </div>
          <iframe
            width="705.100"
            height="400"
            src="https://www.youtube.com/embed/abHjagvHmtA?si=EJKRaqZ5Qy_Sw1AN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className={"color"}>
          <h2>Seja parte dessa iniciativa!</h2>
          <h4>conheça os nossos projetos, vem fortalecer nossa cultura</h4>
        </div>
      </div>

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
