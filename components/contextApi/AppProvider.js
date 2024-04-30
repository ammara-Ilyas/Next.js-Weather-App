"use client";
import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [data, setData] = useState();
  const [main, setMain] = useState();
  const [isData, setIsData] = useState(false);
  // imperial
  return (
    <AppContext.Provider
      value={{ data, setData, isData, setIsData, main, setMain }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;
