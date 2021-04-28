import { useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Container, TableView, ToogleHidden } from "./styles";

export function Branches() {
  const tableViewRef = useRef<HTMLDivElement>(null);
  const toogleViewRef = useRef<HTMLButtonElement>(null);
  const [isShow, setIsShow] = useState(true);

  function toogleHidden() {
    if (isShow) {
      tableViewRef.current?.classList.add("hidden");
      toogleViewRef.current?.classList.add("bt-toogle");
      setIsShow(!isShow);
    } else {
      tableViewRef.current?.classList.remove("hidden");
      toogleViewRef.current?.classList.remove("bt-toogle");
      setIsShow(!isShow);
    }
  }

  return (
    <Container id="branchesWindow">
      <TableView ref={tableViewRef}>
        <div>
          <h3>Branches</h3>
        </div>
        <div>
          <input type="text" placeholder="Search Branch" />
          <button className="bt-add">Add Branch</button>
        </div>
        <table>
          {new Array(10).fill(0).map((_, idx) => (
            <tr key={idx}>
              <td>Best Branch LTDA</td>
              <td>
                <a href="#selectedBranch" type="button" onClick={() => {}}>
                  View
                </a>
                {idx === 3 ? (
                  <button className="bt-remove-active" type="button">
                    Remove
                  </button>
                ) : (
                  <button type="button" disabled>
                    Remove
                  </button>
                )}
              </td>
            </tr>
          ))}
        </table>
      </TableView>
      <ToogleHidden>
        <button
          ref={toogleViewRef}
          className="bt-hidden"
          onClick={toogleHidden}
        >
          {isShow ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </button>
      </ToogleHidden>
    </Container>
  );
}
