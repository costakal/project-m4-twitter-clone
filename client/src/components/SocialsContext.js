// get profile feed & homefeed data to access the likes, retweets etc.
// then update the server, get the response and then update the state accordingly.

import React, { createContext, useState, useEffect } from "react";

export const SocialsContext = createContext(null);

const SocialsContextProvider = ({ children }) => {
  return <SocialsContext.Provider>{children}</SocialsContext.Provider>;
};

export default SocialsContextProvider;
