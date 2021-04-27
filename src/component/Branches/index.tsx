import { Container, Content } from "./styles";

interface BranchesProps {
  setBranch: string;
}

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
          {new Array(10).fill(0).map((_, idx) => (
            <li key={idx}>
              <h4>Best Branch LTDA</h4>
              <div>
                <p>branchlitda@email.com</p>
                <p>(85) 9 8888-0000</p>
                <p>(85) 9 8888-0000</p>
              </div>
              <div>
                <button type="button" onClick={() => {}}>
                  View
                </button>
                <button type="button" disabled>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
