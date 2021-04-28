import { Scope } from "@unform/core";
import { Form } from "@unform/web";
import Input from "../../Form/Input";

import { Container } from "./styles";

interface EditBranchProps {
  branch: {
    name: string;
    email: string;
    phone1: string;
    phone2: string;
    address: {
      street: string;
      number: string;
      neighborhood: string;
      city: string;
      state: string;
      zipcode: string;
    };
  };
}

export function EditBranch({ branch }: EditBranchProps) {
  function handleSubmit() {}

  function handleCancel() {}

  return (
    <Container>
      <Form initialData={branch} onSubmit={handleSubmit}>
        <ul>
          <li>
            <Input className="title" name="name" label="NAME*" />
          </li>
          <li>
            <Input type="email" name="email" label="EMAIL*" />
          </li>
          <li>
            <Input name="phone1" label="PHONE*" />
          </li>
          <li>
            <Input name="phone2" label="PHONE" />
          </li>
          <Scope path="address">
            <li>
              <Input name="street" label="STREET*" />
            </li>
            <li>
              <Input name="number" label="Nº*" />
            </li>
            <li>
              <Input name="neighborhood" label="NEIGHBORHOOD*" />
            </li>
            <li>
              <Input name="city" label="CITY*" />
            </li>
            <li>
              <Input name="state" label="STATE*" />
            </li>
            <li>
              <Input name="zipcode" label="ZIPCODE*" />
            </li>
          </Scope>
          <li className="ContainerButtons">
            <button disabled className="bt-save" type="submit">
              Save
            </button>
            <button
              disabled
              className="bt-cancel"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </li>
        </ul>
      </Form>
    </Container>
  );
}
