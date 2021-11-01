import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TablesContext from "../TablesContext";

const RootTable = () => {
  const { tablesData, headers } = React.useContext(TablesContext);
  return (
    <table className="persons-table">
      <tbody>
        <TableHeader columns={headers} />
        {tablesData.map((record, index) => (
          <TableBody record={record} index={index} key={record.data["Identification number"]} />
        ))}
      </tbody>
    </table>
  );
};

export default RootTable;
