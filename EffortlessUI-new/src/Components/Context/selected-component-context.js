import { createContext, useContext, useState } from "react";
import Buttons from '../Buttons'

export const SelectedComponentContext = createContext();


export function SelectedComponentProvider({ children }) {
  const [selectedComp, setSelectedComp] = useState({ name: "Buttons", id: 1, component: <Buttons /> });

  return (
    <SelectedComponentContext.Provider
      value={{ selectedComp, setSelectedComp }}
    >
      {children}
    </SelectedComponentContext.Provider>
  );
}

export function useSelectedComponent() {
  return useContext(SelectedComponentContext);
}
