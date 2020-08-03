import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Tweet from "./Tweet";
import ErrorScreen from "./Errors/ErrorScreen";
import LoadingWheel from "./LoadingWheel";

const ProfileFeed = () => {
  const [profileFeed, setProfileFeed] = useState(null);
  const [profileFeedError, setProfileFeedError] = useState(false);
  const { profileId } = useParams();
  console.log(profileId);

  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProfileFeed(data);
      })
      .catch((error) => {
        console.log(error);
        setProfileFeedError(true);
      });
  }, [profileId]);

  if (profileFeedError === true) {
    return <ErrorScreen />;
  }

  if (profileFeed !== null) {
    return (
      <div>
        {profileFeed.tweetIds.map((tweetId) => {
          const tweetObj = profileFeed.tweetsById[tweetId];
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

export default ProfileFeed;
