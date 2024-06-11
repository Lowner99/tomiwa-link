// TableContext.js
import { createContext, useContext, useState } from "react";

const TableContext = createContext();

export const useTableContext = () => {
  return useContext(TableContext);
};

export const TableProvider = ({ children }) => {
  const [showTables, setShowTables] = useState(false);

  const handleShowTables = () => {
    setShowTables(true);
  };

  return (
    <TableContext.Provider value={{ showTables, handleShowTables }}>
      {children}
    </TableContext.Provider>
  );
};
