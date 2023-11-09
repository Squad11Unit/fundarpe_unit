import Header from "../../components/Header";
import ProfileHeaders from "../../components/Profiles/header";
import avatarUser from "../../assets/Profile/avatar-user.jpg";
import { NoticeSummary, Wrapper, Legend } from "./styled";
import cardEdital from "../../assets/Profile/cardEdital.png";
import cardEdital2 from "../../assets/Profile/pareceristaCard.png";
import { steps, stepsFinished } from "./constantsAccount";

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
      <h2>Inscrições</h2>
      <NoticeSummary>
        <img src={cardEdital} alt="Card do edital" />
        <div>
          <h3>FUNCULTURA GERAL 2022/2023</h3>
          <p>Colaborador acompanhe sua inscrição, desejamos-lhe boa sorte!</p>
        </div>
      </NoticeSummary>
      <div className="stepProgressBar st">
        {steps.map((step) => (
          <div className="step" key={step.id}>
            {step.status === "active" ? (
              <div className="bullet completed" />
            ) : (
              <div className="bullet" />
            )}
            <div className="stepTitle">{step.title}</div>
            <div className="stepSubtitle">
              {step.status === "active" ? step.subTitle : ""}
            </div>
          </div>
        ))}
      </div>
      <Legend>
        <h3>Legenda</h3>
        <div>
          <p />
          <h6>Seu processo foi aprovado nessa etapa</h6>
        </div>
        <div>
          <p className="wait" />
          <h6>Seu processo ainda não entrou nessa etapa</h6>
        </div>
      </Legend>
      <h2>Histórico</h2>
      <NoticeSummary>
        <img src={cardEdital2} alt="Card do edital" />
        <div>
          <h3>EDITAL DE CREDENCIAMENTO DE PARECERISTA</h3>
          <p>
            Colaborador sua inscrição foi finalizada, desejamos-lhe boa sorte!
          </p>
        </div>
      </NoticeSummary>
      <div className="stepProgressBar st">
        {stepsFinished.map((step) => (
          <div className="step" key={step.title}>
            {step.status === "active" ? (
              <div className="bullet completed" />
            ) : (
              <div className="bullet" />
            )}
            <div className="stepTitle">{step.title}</div>
            <div className="stepSubtitle">
              {step.status === "active" ? step.subtitle : ""}
            </div>
          </div>
        ))}
      </div>

    </Wrapper>
  );
};

export default Account;
