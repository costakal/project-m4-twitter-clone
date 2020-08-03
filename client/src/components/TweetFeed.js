import React, { useContext } from "react";

import { CurrentUserContext } from "./CurrentUserContext";
import Tweet from "./Tweet";

const TweetFeed = () => {
  const { homeFeed, homeFeedStatus } = useContext(CurrentUserContext);

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
    return <div>Still Loading</div>;
  }
};

export default TweetFeed;
