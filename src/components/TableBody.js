import React, { useState, useCallback } from "react";
import TableRow from "./TableRow";
import NestedTable from "./NestedTable";
import TablesContext from "../TablesContext";

const TableBody = ({ record, index }) => {
  const { headerColumnCount, headers } = React.useContext(TablesContext);
  const [isOpen, setOpen] = useState(false);

  const getKids = (record) => {
    const kidKey = Object.keys(record.kids)[0];
    const kidData = "kids" in record && record.kids[kidKey];
    if (kidData !== undefined && kidData.records.length !== 0) {
      return true;
    } else {
      return false;
    }
  };

  const hasKids = getKids(record)
  const toggleOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return (
    <React.Fragment>
      <TableRow
        records={record.data}
        columns={headers}
        clickCallback={() => toggleOpen()}
        path={index}
        record={record}
        hasKids={hasKids}
        isOpen={isOpen}
      />
      {getKids(record) && isOpen === true && (
        <tr>
          <td colSpan={headerColumnCount}>
            <table>
              <tbody>
                <NestedTable
                  nestedData={record.kids}
                  depth={0}
                  isOpen={isOpen}
                  path={`${index}.kids`}
                />
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};

export default TableBody;
