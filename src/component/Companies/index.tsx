import { useRef } from "react";
import { RiEdit2Fill, RiAddCircleLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Container, Tab } from "./styles";

export default function Companies() {
  const companyListRef = useRef<HTMLUListElement>(null);

  function toRoll(direction: boolean) {
    const el = companyListRef.current;

    const maxScroll = el ? el.scrollWidth - el.clientWidth : 0;
    if (el) {
      if (direction) {
        if (el.scrollLeft < maxScroll) {
          el.scroll({ left: el.scrollLeft + 100, behavior: "smooth" });
        }
      } else {
        if (el.scrollLeft > 0) {
          el.scroll({ left: el.scrollLeft - 100, behavior: "smooth" });
        }
      }
    }
  }

  return (
    <Container>
      <Tab>
        <div>
          <button onClick={() => toRoll(false)}>
            <IoIosArrowBack />
          </button>
          <button>
            <RiEdit2Fill />
          </button>
          <button>
            <RiAddCircleLine />
          </button>
        </div>
        <ul ref={companyListRef}>
          {new Array(20).fill(0).map((_, idx) => (
            <li key={idx}>
              <button className={idx === 1 ? "selected" : ""}>Company </button>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={() => toRoll(true)}>
            <IoIosArrowForward />
          </button>
        </div>
      </Tab>
    </Container>
  );
}
