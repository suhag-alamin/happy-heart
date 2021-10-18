import React, { createContext, useEffect, useState } from "react";
import useFirebase from "../hooks/useFirebase";

export const AllContext = createContext();

const ContextProvider = ({ children }) => {
  // services context
  const [services, setServices] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("./services.json");
      const data = await res.json();
      setServices(data);
    };
    loadData();
  }, []);

  // firebase context
  const firebaseContext = useFirebase();

  // combine context
  const combineContext = { services, firebaseContext };

  return (
    <AllContext.Provider value={combineContext}>{children}</AllContext.Provider>
  );
};

export default ContextProvider;
