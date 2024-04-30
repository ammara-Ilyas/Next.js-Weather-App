"use client";
import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [data, setData] = useState();
  const [isData, setIsData] = useState(false);

  return (
    <AppContext.Provider value={{ data, setData, isData, setIsData }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;
