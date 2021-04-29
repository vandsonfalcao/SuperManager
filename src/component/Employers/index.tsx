import { Container, TableEmployers, SelectedEmployer, Employer } from "./style";

export default function Employers() {
  return (
    <Container>
      <div>
        <h3>Employers</h3>
      </div>
      <TableEmployers>
        <div className="tbl">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>CPF</th>
                <th>Email</th>
                <th>Phone 1</th>
                <th>Phone 2</th>
              </tr>
            </thead>
            <tbody>
              {new Array(50).fill(0).map((_, idx) => (
                <tr key={idx}>
                  <td>Fulano de tal teixeira</td>
                  <td>000.000.000-00</td>
                  <td>emaildofulanodetal2021@email.com.br</td>
                  <td>(85)98888-7777</td>
                  <td>(85)98888-7777</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TableEmployers>
      <div>
        <SelectedEmployer />
        <Employer />
      </div>
    </Container>
  );
}
