import React, { useMemo } from "react";
import TableHeader from "./TableHeader";
import NestedRow from "./NestedRow"


const NestedTable = ({ nestedData, depth, isOpen = true, path }) => {
  const tableName = Object.keys(nestedData)[0];
  const currentDepth = depth++;
  const records = nestedData[tableName]["records"];
  const currentPath = path + "." + tableName + ".records";
  const columns = useMemo(
    () =>
      records.length !== 0 && 
      records[0].hasOwnProperty("data")
        ? Object.keys(records[0]["data"])
        : undefined,
    [records]
  );

  return (
    <React.Fragment>
      {records.length !== 0 && columns !== undefined && (
        <tr
          className="persons-table--nested"
          style={{ marginLeft: depth * 30, display: isOpen ? "block" : "none" }}
        >

          {records.map(
            (record, index) =>
              record.hasOwnProperty("data") && (
                <React.Fragment key={`${index}-${tableName}`}>
                  {index === 0 && <h3>{tableName}</h3>}
                  <TableHeader columns={[...columns]} />
                  <NestedRow record={record} columns={columns} currentPath={currentPath} currentDepth={currentDepth} index={index} tableName={tableName}/>
                </React.Fragment>
              )
          )}
        </tr>
      )}
    </React.Fragment>
  );
};
export default NestedTable;
