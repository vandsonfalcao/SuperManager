import { Container } from "./styles";

export function Branches() {
  return (
    <Container id="branchesWindow">
      <div>
        <h3>Branches</h3>
      </div>
      <div>
        <input type="text" placeholder="Search Branch" />
        <button className="bt-add">Add Branch</button>
      </div>
      <table>
        {new Array(10).fill(0).map((_, idx) => (
          <tr key={idx}>
            <td>Best Branch LTDA</td>
            <td>
              <a href="#selectedBranch" type="button" onClick={() => {}}>
                View
              </a>
              {idx === 3 ? (
                <button className="bt-remove-active" type="button">
                  Remove
                </button>
              ) : (
                <button type="button" disabled>
                  Remove
                </button>
              )}
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
}
