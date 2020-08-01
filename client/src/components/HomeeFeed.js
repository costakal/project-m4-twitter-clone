import React from "react";
import styled from "styled-components";

import TweetFeed from "./TweetFeed";
import TweetInput from "./TweetInput";

const HomeFeed = () => {
  return (
    <>
      <Title>Home</Title>
      <TweetInput />
      <TweetFeed />
    </>
  );
};
export default HomeFeed;

const Title = styled.h2`
  padding: 15px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #f0f0f0;
`;
