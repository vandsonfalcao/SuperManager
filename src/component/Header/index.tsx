import { Container } from "./styles";
import { BsGear } from "react-icons/bs";

interface HeaderProps {
  fullname: string;
}

export default function Header({ fullname }: HeaderProps) {
  const arr = fullname.trim().split(" ");
  const newName = `${arr[0]} ${arr.length > 1 ? arr[arr.length - 1] : ""}`;
  return (
    <Container>
      <div>
        <div>
          <BsGear />
          <h1>Super Manager </h1>
        </div>
        <div>
          <p>
            Wellcome, <strong>{newName}</strong> !
          </p>
        </div>
      </div>
    </Container>
  );
}
