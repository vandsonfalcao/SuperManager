import { FiUsers } from "react-icons/fi";
import { GiGears } from "react-icons/gi";

import { Container, Content } from "./styles";

export function Branches() {
  return (
    <Container>
      <Content>
        <div>
          <input type="text" placeholder="Search" />
          <button className="bt-find">Find</button>
          <button className="bt-add">Add</button>
        </div>
        <ul>
          {new Array(4).fill(0).map((_, idx) => (
            <li key={idx}>
              <h4>Best Branch LTDA</h4>
              <div>
                <p>branchlitda@email.com</p>
                <p>(85) 9 8888-0000</p>
                <p>(85) 9 8888-0000</p>
              </div>
              <div>
                <div>
                  <FiUsers />
                  Employees: {24}
                </div>
                <div>
                  <GiGears />
                  Machines: {24}
                </div>
              </div>
              <div>
                <button>View</button>
                <button disabled>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
