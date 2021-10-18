import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AllContext = createContext();

const ContextProvider = ({ children }) => {
  const firebaseContext = useFirebase();
  return (
    <AllContext.Provider value={firebaseContext}>
      {children}
    </AllContext.Provider>
  );
};

export default ContextProvider;
