import { AppContext } from "./AppContext";
import { doctors } from "../assets/assets";
export const AppContextProvider = ({ children }) => {
  const user = {doctors};

  return (
    <AppContext.Provider value={user }>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;