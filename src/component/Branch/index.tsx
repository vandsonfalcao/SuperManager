import { RiCommunityLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { GiGears } from "react-icons/gi";

import { EditBranch } from "../Edit/Branch";

import { Container, ViewInfo } from "./styles";
import { useState } from "react";

export function Branch() {
  const [view, setView] = useState<"none" | "edit" | "employeers" | "devices">(
    "none"
  );
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

  function handleBack() {}

  function handleEdit() {
    setView("edit");
  }

  function showView(view: string) {
    switch (view) {
      case "edit":
        return <EditBranch branch={branch} />;
      case "employeers":
        return (
          <div
            style={{
              background: "lightyellow",
              flex: "1",
              margin: "1rem",
              animation: "resize-from-left 1.5s",
            }}
          />
        );
      case "devices":
        return (
          <div
            style={{
              background: "lightgreen",
              flex: "1",
              margin: "1rem",
              animation: "resize-from-left 1.5s",
            }}
          />
        );
      default:
        break;
    }
  }

  return (
    <Container>
      <div>
        <ViewInfo id="newBranchWindow">
          <ul>
            <li>
              <RiCommunityLine />
              <h2>Best Branch Name LTDA</h2>
              <div>Company - {"Name Companie"}</div>
              <div>CPNJ - {"87.478.451/00004-54"}</div>
            </li>
            <li>
              <button
                className="bt-edit"
                type="button"
                onClick={() => setView("employeers")}
              >
                <FiUsers /> See Employees
              </button>
              <strong>{55}</strong>
            </li>
            <li>
              <button
                className="bt-edit"
                type="button"
                onClick={() => setView("devices")}
              >
                <GiGears /> See Devices
              </button>
              <strong>{23}</strong>
            </li>
            <li>
              <a
                href="#top"
                className="bt-back"
                type="button"
                onClick={handleBack}
              >
                Back
              </a>
              <a
                href="#newBranchWindow"
                className="bt-edit"
                type="button"
                onClick={handleEdit}
              >
                Edit
              </a>
            </li>
          </ul>
        </ViewInfo>
        {showView(view)}
      </div>
    </Container>
  );
}
