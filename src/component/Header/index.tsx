import { Container } from "./styles";
import { BsGear } from "react-icons/bs";

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  const fullname = name.split(" ");
  const username =
    fullname.slice(0, 1) +
    " " +
    fullname.slice(fullname.length - 1, fullname.length).join("");
  return (
    <Container>
      <div>
        <div>
          <BsGear />
          <h1>Super Manager </h1>
        </div>
        <div>
          <p>
            Wellcome, <strong>{username}!</strong>
          </p>
        </div>
      </div>
    </Container>
  );
}
