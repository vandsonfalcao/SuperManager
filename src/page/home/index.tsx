import Header from "../../component/Header/index";
import Companies from "../../component/Companies/index";
import { Branches } from "../../component/Branches";
import { Branch } from "../../component/Branch";

import { Container, Content } from "./styles";
import Employers from "../../component/Employers";

export default function home() {
  return (
    <Container>
      <Header fullname="Vandson de Sousa Falcão" />
      <Companies />
      <Content>
        <Branches />
        <Branch />
      </Content>
      <Employers />
    </Container>
  );
}
