import { Card, Header, Search } from "../../components";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Search />
      <Card />
      <Card />
    </Container>
  );
}
