import { Form } from "@unform/web";
import Input from "../../Form/Input";

import { Container } from "./styles";

interface EditEmployerProps {
  employer: {
    name: string;
    cpf: string;
    email: string;
    phone1: string;
    phone2: string;
    device: string;
  };
}

export function EditEmployer({ employer }: EditEmployerProps) {
  function handleSubmit() {}

  return (
    <Container>
      <Form initialData={employer} onSubmit={handleSubmit}>
        <ul>
          <li>
            <Input className="title" name="name" label="NAME*" />
          </li>
          <li>
            <label>CPF: {employer.cpf}</label>
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
          <li className="ContainerButtons">
            <button className="bt-save" type="submit">
              Update
            </button>
            <button disabled className="bt-remove" type="button">
              Remove
            </button>
          </li>
        </ul>
      </Form>
    </Container>
  );
}
