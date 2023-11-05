import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProfileHeaders from "../../components/Profiles/header";
import avatarUser from "../../assets/Profile/avatar-user.jpg";
import { NoticeSummary, Wrapper } from "./styled";
import cardEdital from "../../assets/Profile/cardEdital.png";

const Account = () => {
  return (
    <Wrapper>
      <Header userName="Ana Silva" />
      <ProfileHeaders
        photo={avatarUser}
        name="Ana Silva"
        occupation="ARTISTA PERNAMBUCANA"
        th1="Sobre"
        th2="Inscrições"
        th3="Notificações"
        th4="Conexões"
        th5="Documentações"
        follow
      />
      <h1>Inscrições</h1>
      <NoticeSummary>
        <img src={cardEdital} alt="Card do edital" />
        <div>
          <h3>FUNCULTURA GERAL 2022/2023</h3>
          <p>Colaborador acompanhe sua inscrição, desejamos-lhe boa sorte!</p>
        </div>
      </NoticeSummary>
    </Wrapper>
  );
};

export default Account;
