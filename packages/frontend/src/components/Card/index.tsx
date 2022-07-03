import { CardBox, CardContainer } from "./styles";

export function Card() {
  return (
    <CardContainer>
      <CardBox>
        <h4>Arquitetura Limpa</h4>
        <h6>Uncle Bob</h6>
        <p>ISBN: 2459-45245-435245-34</p>
      </CardBox>
      <CardBox>
        <p>Código de cópia:</p>
        <h3>AQUN100</h3>
      </CardBox>
    </CardContainer>
  );
}
