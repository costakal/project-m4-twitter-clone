import React, { useContext } from "react";

import { CurrentUserContext } from "./CurrentUserContext";
import Tweet from "./Tweet";
import ErrorScreen from "./Errors/ErrorScreen";
import LoadingWheel from "./LoadingWheel";

const TweetFeed = () => {
  const { homeFeed, homeFeedStatus, error } = useContext(CurrentUserContext);

  if (error === true) {
    return <ErrorScreen />;
  }

  if (homeFeedStatus === "idle") {
    return (
      <div>
        {homeFeed.tweetIds.map((tweetId) => {
          const tweetObj = homeFeed.tweetsById[tweetId];
          return <Tweet key={tweetId} tweetObj={tweetObj} />;
        })}
      </div>
    );
  } else {
    return (
      <div>
        <LoadingWheel />
      </div>
    );
  }
};

export default TweetFeed;
