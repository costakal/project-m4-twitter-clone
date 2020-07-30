import React, { useContext } from "react";

import { CurrentUserContext } from "./CurrentUserContext";

const HomeFeed = () => {
  const { homeFeed, homeFeedStatus } = useContext(CurrentUserContext);

  if (homeFeedStatus === "idle") {
    const tweetArray = homeFeed.tweetIds;
    const tweetObject = homeFeed.tweetsById;

    const objectKey = Object.keys(tweetObject);
    console.log(objectKey);

    return (
      <div>
        {tweetArray.map((tweet) => {
          return tweetObject.find((match) => tweet === objectKey);
        })}
      </div>
    );
  } else {
    return <div>Still Loading</div>;
  }
};

export default HomeFeed;
