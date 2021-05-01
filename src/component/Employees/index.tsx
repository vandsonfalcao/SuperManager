import {
  Container,
  TableEmployees,
  SelectedEmployee,
  EmployeeDevices,
} from "./style";
import { IoIosArrowUp } from "react-icons/io";
import { GiGears } from "react-icons/gi";

import { EditEmployer } from "../Edit/Employee/index";

export default function Employees() {
  const employee = {
    name: "Fulano de tal teixeira",
    cpf: "000.000.000-00",
    email: "fulanodetalteixeira2021@email.com.br",
    phone1: "(85)98888-4444",
    phone2: "(85)98888-4444",
    device: "Machine H",
  };

  return (
    <Container>
      <div id="employeesWindow">
        <h3>Employees</h3>
        <a href="#branchWindow" className="bt-back" type="button">
          <IoIosArrowUp />
          Back
        </a>
      </div>
      <div>
        <input type="text" placeholder="Search Employee" />
        <button className="bt-add">Add Employee</button>
      </div>
      <TableEmployees>
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
                <tr
                  key={idx}
                  onClick={() => {
                    window.location.href = "#selectedEmployee";
                    console.log("selected row:" + idx);
                  }}
                >
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
      </TableEmployees>

      <SelectedEmployee id="selectedEmployee">
        <header>
          <h3>Selected Employee</h3>
          <a href="#employeesWindow" className="bt-back" type="button">
            <IoIosArrowUp />
            Back
          </a>
        </header>
        <div>
          <EditEmployer employer={employee} />
          <EmployeeDevices>
            <h3>Employee Devices</h3>
            <ul>
              {new Array(5).fill(0).map((_, idx) => (
                <li key={idx}>
                  <div>
                    <h4>Best Device </h4>
                    <span>SN: FD87276514415</span>
                    <span>Model: B+</span>
                  </div>
                  <div>
                    <span>
                      Best device more recomended in industrie world wide.
                      110-220V 10-20A.
                    </span>
                  </div>
                  <div>
                    <div>
                      <GiGears />
                    </div>
                    <div>
                      <strong>Status</strong>
                      <span>In Operation</span>
                    </div>
                    <div>
                      <strong>Hearth</strong>
                      <div>
                        <strong>{97}%</strong>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </EmployeeDevices>
        </div>
      </SelectedEmployee>
    </Container>
  );
}
