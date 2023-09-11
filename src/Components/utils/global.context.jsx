import { createContext } from "react";

export const themes = {

  light:{
    font: "black",
    background: "white"
  },

  dark:{
    font: "white",
    background: "black"
  }
}


export const initialState = {
  themes: themes.light, 
  data: []
}


const ContextGlobal = createContext(initialState);

export default ContextGlobal; 


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};




