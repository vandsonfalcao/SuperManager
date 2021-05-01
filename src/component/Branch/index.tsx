import { RiCommunityLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { GiGears } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";

import { EditBranch } from "../Edit/Branch";

import { Container, ViewInfo } from "./styles";

export function Branch() {
  const branch = {
    name: "Best Branch LTDA",
    email: "bestbranchemail@email.com",
    phone1: "(85) 9 8888-4444",
    phone2: "(85) 9 8888-4444",
    address: {
      street: "Rua das Oliveiras",
      number: "74",
      neighborhood: "São Gerardo",
      city: "Fortaleza",
      state: "CE",
      zipcode: "60.325-140",
    },
  };

  return (
    <Container>
      <ViewInfo id="branchWindow">
        <div>
          <h3>Selected Branch</h3>
          <a href="#branchesWindow" className="bt-back" type="button">
            <IoIosArrowUp />
            Back
          </a>
        </div>
        <ul>
          <li>
            <RiCommunityLine />
            <h2>Best Branch Name LTDA</h2>
            <div>Company - {"Name Companie"}</div>
            <div>CPNJ - {"87.478.451/00004-54"}</div>
          </li>
          <li>
            <button type="button">
              <FiUsers /> See Employees
            </button>
            <strong>{55}</strong>
          </li>
          <li>
            <button type="button">
              <GiGears /> See Devices
            </button>
            <strong>{23}</strong>
          </li>
        </ul>
      </ViewInfo>
      <section></section>
      <EditBranch branch={branch} />
    </Container>
  );
}
