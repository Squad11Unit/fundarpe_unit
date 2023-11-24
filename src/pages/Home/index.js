import CardHome from "../../components/Card";
import CarouselHome from "../../components/Carousel";
import Header from "../../components/Header";
import {
  SelectGroup,
  CardBox,
  ContainerHome,
  AboutBox,
  ButtonBox,
} from "./styled";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { meses, categorias } from "./constants";
import { editalCard } from "../../components/Card/editalCard";
import { eventsCard } from "../../components/Card/eventsCard";
import Banner1 from "../../assets/Principal/banner/Banner1.png";
import Banner2 from "../../assets/Principal/banner/Banner2.png";
import bridge from "../../assets/ponteMauricioDeNassau.png";
import Footer from "../../components/Footer";

function Home() {
  return (
    <ContainerHome>
      <Header
        userName={localStorage.getItem("User") ? "Ana Silva" : "Roberto Silva"}
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
            URL={
              localStorage.getItem("User") ||
              localStorage.getItem("Administrador")
                ? `/edital/${item.id}`
                : "/login"
            }
            text={item.text}
            title={item.title}
            image={item.image}
            month={item.month}
            day={item.day}
            description={item.description}
          />
        ))}
      </CardBox>
      <ButtonBox>
        <button className={"b1"}>Ver mais</button>
      </ButtonBox>
      <AboutBox>
        <a href="https://www.cultura.pe.gov.br/funcultura/" target="_blank" rel="noreferrer">
          O FUNCULTURA
        </a>
        <div>
          <img
            src={bridge}
            alt="imagem do Rio Capibaribe ao fundo a ponte Mauricio de Nassau"
          />
          <p>
            O Fundo Pernambucano de Incentivo à Cultura (Funcultura PE) foi
            instituído por meio da Lei 12.310, de 19 de dezembro de 2002, tendo
            seu primeiro edital lançado em 2003. O fundo público recebe recursos
            oriundos da arrecadação de Imposto sobre Circulação de Mercadorias e
            Serviços (ICMS) pelo Governo do Estado e destina-os ao financiamento
            direto de projetos artísticos e culturais por meio de seleção
            pública. Este modelo está permitindo à democratização do acesso a
            cultura, através do fomento a produção artística e da difusão de
            bens culturais.
          </p>
        </div>
      </AboutBox>

      <div className={"flex_container"}>
        <div className={"flex_section"}>
          <div className={"flex_imag"}>
            <div>
              <img
                className="bloco_1"
                width="100%"
                height="200"
                src={Banner1}
                alt="rvrfvfgrvfgr"
              ></img>
            </div>
            <img
              className="bloco_3"
              width="100%"
              height="200"
              src={Banner2}
              alt="rvrfvfgrvfgr"
            ></img>
          </div>
          <iframe
            src="https://www.youtube.com/embed/abHjagvHmtA?si=EJKRaqZ5Qy_Sw1AN"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className={"color"}>
          <h2 className="whiteh2">Seja parte dessa iniciativa!</h2>
          <h3>conheça os nossos projetos, vem fortalecer nossa cultura</h3>
        </div>
      </div>

      <h1 className="events">Eventos</h1>
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
      <br />
      <Footer />
    </ContainerHome>
  );
}

export default Home;
