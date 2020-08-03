import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { CurrentUserContext } from "./CurrentUserContext";
import Tweet from "./Tweet";
import ErrorScreen from "./Errors/ErrorScreen";

const ProfileFeed = () => {
  const { homeFeed, homeFeedStatus, error } = useContext(CurrentUserContext);
  const { profileId } = useParams();

  if (error === true) {
    return <ErrorScreen />;
  }

  if (homeFeedStatus === "idle") {
    return (
      <div>
        {homeFeed.tweetIds
          .filter(
            (tweetId) =>
              profileId === homeFeed.tweetsById[tweetId].author.handle ||
              (homeFeed.tweetsById[tweetId].retweetFrom &&
                homeFeed.tweetsById[tweetId].retweetFrom.handle === profileId)
          )
          .map((tweetId) => {
            const tweetObj = homeFeed.tweetsById[tweetId];
            return <Tweet key={tweetId} tweetObj={tweetObj} />;
          })}
      </div>
    );
  } else {
    return <div>Still loading</div>;
  }
};

export default ProfileFeed;
