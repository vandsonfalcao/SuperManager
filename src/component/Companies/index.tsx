import { Container, Tab } from "./styles";
import { RiEdit2Fill, RiAddCircleLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function Companies() {
  const [point, setPoint] = useState(0);
  function scrollRight() {
    setPoint(point + 100);
    document
      .querySelector("#company-list")
      ?.scroll({ left: point, behavior: "smooth" });
  }
  function scrollLeft() {
    setPoint(point - 100);
    document
      .querySelector("#company-list")
      ?.scroll({ left: point, behavior: "smooth" });
  }
  return (
    <Container>
      <Tab>
        <div>
          <button onClick={scrollLeft}>
            <IoIosArrowBack />
          </button>
          <div>
            <button>
              <RiEdit2Fill />
            </button>
            <button>
              <RiAddCircleLine />
            </button>
          </div>
        </div>
        <ul id="company-list">
          <li>
            <button>Company</button>
          </li>
          <li>
            <button className="selected">Company</button>
          </li>
          <li>
            <button>Company</button>
          </li>
          <li>
            <button>Company</button>
          </li>
          <li>
            <button>Company</button>
          </li>
          <li>
            <button>Company</button>
          </li>
          <li>
            <button>Company</button>
          </li>
          <li>
            <button>Company</button>
          </li>
          <li>
            <button>Company</button>
          </li>
          <li>
            <button>Company</button>
          </li>
          <li>
            <button>Company</button>
          </li>
          <li>
            <button>Company</button>
          </li>
          <li>
            <button>Company</button>
          </li>
        </ul>
        <div>
          <button onClick={scrollRight}>
            <IoIosArrowForward />
          </button>
        </div>
      </Tab>
    </Container>
  );
}
