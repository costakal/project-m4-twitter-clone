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

  const handleTweetPost = (text) => {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: text }),
    };
    fetch("/api/tweet", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetch(`/api/tweet/${data.tweet.id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((newData) => {
            const updatedArray = [...homeFeed.tweetIds, newData.tweet.id];
            const updatedObject = {
              ...homeFeed.tweetsById,
              [newData.tweet.id]: newData.tweet,
            };
            setHomeFeedStatus("loading");
            setHomeFeed({ tweetIds: updatedArray, tweetsById: updatedObject });
            setHomeFeedStatus("idle");
          });
      });
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, status, homeFeed, homeFeedStatus, handleTweetPost }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
