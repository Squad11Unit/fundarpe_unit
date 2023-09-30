import CarouselHome from "../../components/Carousel";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
