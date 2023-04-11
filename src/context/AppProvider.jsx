import { React, createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  addEventListener("scroll", changeColor);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <AppContext.Provider value={{ click, scroll, handleClick }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
