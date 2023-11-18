import Header from "../../components/Header";
import { ContainerFormPage } from "../../components/Forms/FormsPublicNo/styled";
import FormsPublicNotices from "../../components/Forms/FormsPublicNo";
import CheckBoxForm from "../../components/Forms/FormsPublicNo/checkBForm";
import { publicForms } from "../../components/Forms/FormsPublicNo/publicForms";
import { publicFormsTwo } from "../../components/Forms/FormsPublicNo/publicFormsTwo";
import { checkboxForm } from "../../components/Forms/FormsPublicNo/checkbox";
import { FileText, Lightbulb, Download } from "react-bootstrap-icons";
import { FileIcon, LampIcon } from "../../components/PublicNotice/styled";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer";
import { editalCard } from "../../components/Card/editalCard";
import { checkboxFormGeral } from "../../components/Forms/FormsPublicNo/checkboxG";
import { checkboxFormAudioV } from "../../components/Forms/FormsPublicNo/checboxAudio";
import { checkboxFormM } from "../../components/Forms/FormsPublicNo/checkboxM";
import { checkboxFormParecerista } from "../../components/Forms/FormsPublicNo/checkboxP";

function RegistrationForm() {
  const id = window.location.pathname.split("/").pop();
  return (
    <ContainerFormPage>
      <sectionZero>
        <Header
          userName={
            localStorage.getItem("User") ? "Ana Silva" : "Roberto Silva"
          }
        />
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
            {editalCard.map((item) => {
              if (id.includes(item.id)) {
                return <h5>{item.description}</h5>;
              }
              return null;
            })}
          </div>
          <div className={"text2"}>
            <h6>Número de Inscrição</h6>
            <h6>00000000026</h6>
          </div>
        </div>
      </sectionZero>

      <h1>Formulário de Inscrição</h1>

      {editalCard.map((item) => {
        if (id.includes(item.id)) {
          if (item.category === "musica") {
            return (
              <sectionOne key={item.id}>
                <div className={"form_public"}>
                  <h4>Categorias</h4>
                  {checkboxForm.map((item) => (
                    <CheckBoxForm title={item.title} text={item.text} />
                  ))}
                </div>
              </sectionOne>
            );
          }
          if (item.category === "geral") {
            return (
              <sectionOne key={item.id}>
                <div className={"form_public"}>
                  <h4>Categorias</h4>
                  {checkboxFormGeral.map((item) => (
                    <CheckBoxForm title={item.title} text={item.text} />
                  ))}
                </div>
              </sectionOne>
            );
          }
          if (item.category === "audiovisual") {
            return (
              <sectionOne key={item.id}>
                <div className={"form_public"}>
                  <h4>Categorias</h4>
                  {checkboxFormAudioV.map((item) => (
                    <CheckBoxForm title={item.title} text={item.text} />
                  ))}
                </div>
              </sectionOne>
            );
          }
          if (item.category === "microprojeto") {
            return (
              <sectionOne key={item.id}>
                <div className={"form_public"}>
                  <h4>Categorias</h4>
                  {checkboxFormM.map((item) => (
                    <CheckBoxForm title={item.title} text={item.text} />
                  ))}
                </div>
              </sectionOne>
            );
          }
          if (item.category === "parecerista") {
            return (
              <sectionOne key={item.id}>
                <div className={"form_public"}>
                  <h4>Categorias</h4>
                  {checkboxFormParecerista.map((item) => (
                    <CheckBoxForm title={item.title} text={item.text} />
                  ))}
                </div>
              </sectionOne>
            );
          }
        }
        return null;
      })}

      <sectionTwo>
        <div className={"form_public"}>
          <h4>1. Seus dados</h4>
          {publicForms.map((item) => (
            <FormsPublicNotices title={item.title} text={item.text} />
          ))}
        </div>
      </sectionTwo>

      <sectionThree>
        <div className={"form_public"}>
          <h4>2. Autodeclaração</h4>
          {publicFormsTwo.map((item) => (
            <FormsPublicNotices title={item.title} text={item.text} />
          ))}
        </div>
      </sectionThree>

      <sectionFour>
        <div className={"threeForm"}>
          <div className="attchIcon">
            <h4>Anexar documentos</h4>
            <Download className={"iconD"} />
          </div>
          <div className={"load"}>
            <p>
              Arraste ou selecione um documento max. 1 - max. 10 - MB formato
              PDF /DOC/ DOCX
            </p>
            <Button className="b1">Salvar</Button>
          </div>
        </div>
        <div className="buttonbox">
          <Button className="bfinish">Finalizar Inscrição</Button>
        </div>
      </sectionFour>

      <Footer />
    </ContainerFormPage>
  );
}

export default RegistrationForm;
