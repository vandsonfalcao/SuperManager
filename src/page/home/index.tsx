import Header from "../../component/Header/index";
import Companies from "../../component/Companies/index";
import { Container } from "./styles";

export default function home() {
  return (
    <Container>
      <Header fullname="Vandson de Sousa Falcão" />
      <Companies />
    </Container>
  );
}
