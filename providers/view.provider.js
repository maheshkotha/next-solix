import { createContext, useState } from "react";


export const ViewContext = createContext(null);

const ViewProvider = ({children}) => {
  const [view, setView] = useState("map");
  return (
    <ViewContext.Provider value={{view, setView}}>
      {children}
    </ViewContext.Provider>
  )
}

export default ViewProvider;