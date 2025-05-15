import React, { useState } from "react";

import userContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  //is used so that whatever is received in the childre, pass it as it is
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
