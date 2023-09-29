import CardHome from "../../components/Card";
import CarouselHome from "../../components/Carousel";
import Header from "../../components/Header";
import {H1} from "./styled";

const Home = () => {
  return (
    <div>
      <Header />
      <CarouselHome
        title="Iniciativa do Governo de Pernambuco"
        detail="voltada para o apoio e promoção da cultura no estado"
        description="A Funcultura atua através de editais lançadas anualmente, essas oportunidades disponibilizam recursos do governo do Estado para artistas e produtores culturais para a realização de projetos em diversas áreas, visando fortalecer a cultura de Pernambuco."
      />
      <H1>Novos Editais</H1>
      <CardHome/>
    </div>
  );
};

export default Home;
