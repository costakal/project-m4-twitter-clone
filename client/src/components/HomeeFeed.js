import React from "react";

import TweetFeed from "./TweetFeed";
import TweetInput from "./TweetInput";

const HomeFeed = () => {
  return (
    <>
      <h2>Home</h2>
      <TweetInput />
      <TweetFeed />
    </>
  );
};
export default HomeFeed;
