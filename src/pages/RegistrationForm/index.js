import Header from "../../components/Header";
import { ContainerFormPage } from "../../components/Forms/FormsPublicNo/styled";
import FormsPublicNotices from "../../components/Forms/FormsPublicNo";
import CheckBoxForm from "../../components/Forms/FormsPublicNo/checkBForm"
import { publicForms } from "../../components/Forms/FormsPublicNo/PublicForms";
import {publicFormsTwo} from "../../components/Forms/FormsPublicNo/publicFormsTwo"
import { checkboxForm } from "../../components/Forms/FormsPublicNo/checkbox"
import { FileText, Lightbulb, Download } from "react-bootstrap-icons";
import { FileIcon, LampIcon} from "../../components/PublicNotice/styled";
import { Button } from "react-bootstrap";

function RegistrationForm() {
  return (
    <ContainerFormPage>
      
      <sectionZero>
        <Header />
        <div className={"flex_body"}>
          <div className={"text1"}>
              <FileIcon>
                <FileText />
                <span>FUNCULTURA 2023</span>
              </FileIcon>
              <LampIcon>
                <Lightbulb />
                <span>Edital</span>
              </LampIcon>
              <h5>7° EDITAL DO PROGRAMA DE FOMENTO À PRODUÇÃO EM MÚSICA DE PERNAMBUCO - FUNCULTURA 2022/2023</h5>
          </div>
          <div className={"text2"}>
            <h6>Número de Inscrição</h6>
            <h6>00000000026</h6>
          </div>
        </div>
      </sectionZero>

      <h1>Formulário de Inscrição</h1>

      <sectionOne>

        <div className={"form_public"}>
        <h4>1. Seus dados</h4>
          {checkboxForm.map((item) => (
          <CheckBoxForm
            title={item.title}
            text={item.text}
          />
        ))}
        </div>
      </sectionOne>

      <sectionTwo>
        <div className={"form_public"}>
        <h4>1. Seus dados</h4>
          {publicForms.map((item) => (
          <FormsPublicNotices
            title={item.title}
            text={item.text}
          />
        ))}
        </div>
      </sectionTwo>

      <sectionThree>
      <div className={"form_public"}>
        <h4>2. Autodeclaração</h4>
          {publicFormsTwo.map((item) => (
          <FormsPublicNotices
            title={item.title}
            text={item.text}
          />
        ))}
        </div>
      </sectionThree>

      <sectionFour>

      <div className={"threeForm"}>
        <h4>Anexar documentos</h4>
        <Download className={"iconD"}/>
        <div className={"load"}>
            <p>Arraste ou selecione um documento max. 1 - max. 10 - MB formato PDF /DOC/ DOCX</p>
              <Button className="b1">Salvar</Button>
            </div>
      </div>
      <Button className={"bfinish"}>Finalizar Inscrição</Button>

      </sectionFour>

    </ContainerFormPage>
  );
}

export default RegistrationForm;
