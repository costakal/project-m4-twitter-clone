import React, { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");
  const [homeFeed, setHomeFeed] = useState(null);
  const [homeFeedStatus, setHomeFeedStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/me/profile`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
        setStatus("idle");
      });
  }, []);

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHomeFeed(data);
        setHomeFeedStatus("idle");
      });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, status, homeFeed, homeFeedStatus }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
