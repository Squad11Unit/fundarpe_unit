import Header from "../../components/Header";
import { ContainerFormPage } from "../../components/Forms/FormsPublicNo/styled";
import FormsPublicNotices from "../../components/Forms/FormsPublicNo";
import Logo from "../../assets/Form/edital2023.png";
import Exem from "../../assets/Form/Group 323.png";

function RegistrationForm() {
  return (
    <ContainerFormPage>
    <sectionOne>
      <Header />
      <div className={"flex_body"}>
        <div>
          <img
            className="bloco_1"
            width="300 rem"
            height="200 rem"
            src={Logo}
            alt="rvrfvfgrvfgr"
          ></img>
        </div>
        <div className={"text1"}>
        <img
              className="bloco_3"
              width="550 rem"
              height="150 rem"
              src={Exem}
              alt="rvrfvfgrvfgr"
            ></img>
        </div>
        <div className={"text2"}>
          <h5>Número de Inscrição</h5>
          <h6>00000000026</h6>
        
        </div>
      </div>
      </sectionOne>
      <h1>Formulario de inscrição</h1>
      <sectionTwo>

      </sectionTwo>

      <sectionTree>
      <div className={"form_public"}>
        <FormsPublicNotices />
      </div>
      </sectionTree>
    </ContainerFormPage>
  );

}

export default RegistrationForm;
