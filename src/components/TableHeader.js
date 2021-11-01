import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <tr>
      <td className="top-cell"></td>
      {columns.map((columnName, index) => (
        <th key={`${index}-${columnName}`} className="top-cell">
          {columnName}
        </th>
      ))}
      <td className="top-cell"></td>
    </tr>
  );
};
export default TableHeader;
