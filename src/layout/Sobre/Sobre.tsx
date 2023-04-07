import WhoAmI from "../../components/WhoAmI";
import * as Styles from "./Sobre.styles";
import Description from "../../components/Typography/Description";
import Heading from "../../components/Typography/Heading";

const Sobre = () => {
  return (
    <Styles.Container>
      <WhoAmI />
      <Styles.ContainerWho>
        <Styles.Avatar src="/images/lidiane.png" alt="logo" />
        <Styles.Text>
          <Heading inverse size={"Display"} label="Lidiane Vieira" />
          <Description
            inverse
            label="Com conhecimentos avançados em diversas ferramentas tecnológicas como Pacote Office, Adobe, AutoCad, SketchUp, Revit e Lumion, além do Corel Draw, sou capaz de desenvolver projetos desde a fase preliminar até a sua execução. Com vasta experiência na produção e apresentação de projetos, assim como no acompanhamento de obras e manutenção preventiva e corretiva de edifícios, possuo grande apreço pela indústria e projetos voltados para o varejo. Acredito que o sucesso em qualquer empreendimento é alcançado através da colaboração e trabalho em equipe. Com isso em mente, estou sempre atualizada sobre as novas tendências e mudanças no mercado, para garantir que as minhas soluções sejam eficientes e inovadoras. Busco continuamente aprimorar minhas habilidades e conhecimentos para atender às necessidades dos clientes com qualidade e excelência, guiada pela ética profissional."
          />
        </Styles.Text>
      </Styles.ContainerWho>
    </Styles.Container>
  );
};

export default Sobre;
