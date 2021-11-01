import React, {useState} from "react";
import TableRow from "./TableRow";
import NestedTable from "./NestedTable";

const NestedRow = ({ record, columns, currentDepth, currentPath, index }) => {
  const [isOpen, setOpen] = useState(false)
  const getKids = () => {
    const key = Object.keys(record.kids)[0]
    if(record.kids[key] === undefined) {
      return false
    } 
    return record.kids[key].records.length 
  } 
  const hasKids = getKids()

  return (
    <React.Fragment>
    <TableRow
    records={record.data}
    columns={columns}
    clickCallback={() => setOpen(!isOpen)}
    hasKids={hasKids}
    path={`${currentPath}.${index}`}
    tableData={record}
    isOpen={isOpen}
  />
  {Object.keys(record.kids).length !== 0 && (
    <NestedTable
      nestedData={record.kids}
      depth={currentDepth}
      isOpen={isOpen}
      path={`${currentPath}.${index}.kids`}
    />
  )}
  </React.Fragment>
  );
};
export default NestedRow;
