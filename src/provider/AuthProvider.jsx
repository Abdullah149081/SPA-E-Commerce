import React, { createContext, useState } from "react";

export const userContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authInfo = {
    user,
  };

  return <userContext.Provider value={authInfo}>{children}</userContext.Provider>;
};

export default AuthProvider;
