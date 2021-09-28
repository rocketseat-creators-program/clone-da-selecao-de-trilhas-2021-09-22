import { IgniteTrail } from "../../assets";
import { content } from "../../components/data";
import { Ticket } from "../../components/Ticket";
import { Container, IgniteContainer, TextContainer, Footer } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <IgniteContainer>
        <IgniteTrail />
        <TextContainer>
          <h1>O Ignite</h1>

          <p>
            {
              "O Ignite é um programa de aceleração de carreira que vai te preparar "
            }
            {
              "para o mercado, treinando habilidades técnicas e comportamentais. No "
            }
            {
              "Ignite nós vamos a fundo em uma tecnologia específica, através de um "
            }
            {"currículo desenhado em parceria com grandes empresas. Nossa "}
            {
              "metodologia já ajudou mais de 10 mil alunas e alunos a acelerarem na "
            }
            {"direção dos seus objetivos de carreira."}
          </p>
          <Footer>
            <div>
              <span>Podemos te ajudar a escolher sua trilha!</span>

              <p>
                {
                  "Converse com a gente, vamos juntos encontrar a trilha mais alinhada"
                }
                {"com seus objetivos."}
              </p>
            </div>
          </Footer>
        </TextContainer>
      </IgniteContainer>

      {content.map((item) => (
        <Ticket {...item} key={item.trail} />
      ))}
    </Container>
  );
}
