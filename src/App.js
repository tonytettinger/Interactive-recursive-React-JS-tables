import React, { useState, useMemo } from "react";
import "./scss/App.scss";
import RootTable from "./components/RootTable";
import TablesContext from "./TablesContext";
import personsTable from './data/example-data.json'

const App = () => {
  const objectPath = require("object-path");
  const headers = useMemo(() => Object.keys(personsTable[0].data).map((key) => key),[]);
  const [tablesData, setTablesData] = useState(personsTable);
  const headerColumnCount = personsTable.length+1;
  const deletePath = (path) => {
    const copyObject = [...tablesData];
    objectPath.del(copyObject, path);
    setTablesData(copyObject);
  };

  return (
      <div className="content">
        <TablesContext.Provider value={{ tablesData, headers, deletePath, headerColumnCount }}>
          <RootTable />
        </TablesContext.Provider>
      </div>
  );
};

export default App;
