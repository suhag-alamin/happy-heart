import React, { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://developer-suhag.github.io/happy-heart-json/services.json"
      );
      const data = await res.json();
      setServices(data);
    };
    loadData();
  }, []);
  return (
    <DataContext.Provider value={services}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
