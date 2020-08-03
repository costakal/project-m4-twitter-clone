import React, { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");
  const [homeFeed, setHomeFeed] = useState(null);
  const [homeFeedStatus, setHomeFeedStatus] = useState("loading");
  const [updatedFeed, setUpdatedFeed] = useState(false);
  const [error, setError] = useState(false);
  const [postError, setPostError] = useState(false);

  useEffect(() => {
    fetch(`/api/me/profile`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
        setStatus("idle");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHomeFeed(data);
        setHomeFeedStatus("idle");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [updatedFeed]);

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
      .then((newData) => {
        console.log(newData);
        setUpdatedFeed(!updatedFeed);
      })
      .catch((error) => {
        console.log(error);
        setPostError(true);
      });
  };

  const handleLike = (tweetId, isLiked) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like: !isLiked }),
    };
    fetch(`/api/tweet/${tweetId}/like`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUpdatedFeed(!updatedFeed);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRetweet = (tweetId, isRetweeted) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ retweet: !isRetweeted }),
    };
    fetch(`/api/tweet/${tweetId}/retweet`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUpdatedFeed(!updatedFeed);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        status,
        homeFeed,
        homeFeedStatus,
        handleTweetPost,
        error,
        postError,
        handleLike,
        handleRetweet,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
