import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CurrentUserContext } from "./CurrentUserContext";
import Tweet from "./Tweet";
import ErrorScreen from "./Errors/ErrorScreen";
import LoadingWheel from "./LoadingWheel";

const ProfileFeed = () => {
  const { error } = useContext(CurrentUserContext);
  const { profileId } = useParams();
  const [profileFeed, setProfileFeed] = useState(null);

  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProfileFeed(data);
      });
  }, []);

  if (error === true) {
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
