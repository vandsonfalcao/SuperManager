import { RiCommunityLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { GiGears } from "react-icons/gi";

import { Container, Content, Detail } from "./styles";

export function Branch() {
  return (
    <Container>
      <div>
        <RiCommunityLine />
        <section></section>
        <Detail>
          <div>
            <label>Street</label>
            <input
              className="title"
              type="text"
              value="Best Branch Name LTDA"
            />
          </div>
          <div>
            <label>E-mail</label>
            <input type="text" value="bestbranchemailltda@email.com" />
            <label className="target">Phone 1</label>
            <input type="text" value="(85) 9 8888-9999" />
            <label className="target">Phone 2</label>
            <input type="text" value="(85) 9 8888-9999" />
          </div>
          <div>
            <label>Street</label>
            <input type="text" value="Rua acula seila" />
            <label className="target">Nº</label>
            <input type="text" value="45" />
            <label className="target">Neighborhood</label>
            <input type="text" value="Maraponga" />
            <br />
            <label>City/State</label>
            <input type="text" value="Fotaleza" />
            <label>/</label>
            <input type="text" value="CE" />
            <label className="target">Zipcode</label>
            <input type="text" value="60.325-140" />
          </div>
          <div>
            <label>
              <FiUsers /> Employees: {24}
            </label>
            <label className="target">
              <GiGears /> Machines: {24}
            </label>
          </div>
          <div>
            <button className="bt-back">Back</button>
            <button className="bt-edit">Edit</button>
            <button disabled className="bt-save">
              Save
            </button>
            <button disabled className="bt-cancel">
              Cancel
            </button>
          </div>
        </Detail>
      </div>
      <Content></Content>
    </Container>
  );
}
