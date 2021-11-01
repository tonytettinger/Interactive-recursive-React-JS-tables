import React from "react";
import TablesContext from "../TablesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleRight,
  faTrash,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const TableRow = ({
  records,
  columns,
  clickCallback,
  path,
  hasKids,
  isOpen
}) => {
  const { deletePath } = React.useContext(TablesContext);

  return (
      <tr>
        <td>
          <FontAwesomeIcon
            icon={hasKids ? faAngleRight : faMinus}
            rotation={isOpen && hasKids ? 90 : 0}
            size="lg"
            onClick={()=> clickCallback()}
          />
        </td>
        {columns.map((column, index) => (
          <td key={`${index}-${records[column]}`}>{records[column]}</td>
        ))}
        <td>
          <FontAwesomeIcon
            onClick={() => deletePath(path)}
            icon={faTrash}
            size="lg"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </td>
      </tr>
  );
};
export default TableRow;
