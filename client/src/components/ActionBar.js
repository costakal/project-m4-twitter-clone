import React from "react";
import styled from "styled-components";
import { FiHeart, FiDownload, FiMessageCircle, FiRepeat } from "react-icons/fi";
import ActionButton from "./ActionButton";

const ActionBar = ({ data }) => {
  return (
    <ButtonSection>
      <CommentButton>
        <FiMessageCircle />
      </CommentButton>
      <RetweetButton>
        <FiRepeat />
      </RetweetButton>
      <LikeButton>
        <FiHeart />
      </LikeButton>
      <SaveButton>
        <FiDownload />
      </SaveButton>
    </ButtonSection>
  );
};

{
  /* <Wrapper>
<Action color="rgb(27, 149, 224)" size={40}>
  <TweetActionIcon kind="reply" />
</Action>
<Action color="rgb(23, 191, 99)" size={40}>
  <TweetActionIcon
    kind="retweet"
    color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
  />
</Action>
<Action color="rgb(224, 36, 94)" size={40}>
  <LikeButton isLiked={isLikedByCurrentUser} />
</Action>
<Action color="rgb(27, 149, 224)" size={40}>
  <TweetActionIcon kind="share" />
</Action> */
}

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
  button {
    padding: 5px;
    background-color: transparent;
    border: 1px solid grey;
    border-radius: 25px;
    color: black;
    cursor: pointer;
    &:active {
      color: inherit;
    }
  }
`;
const CommentButton = styled.button``;
const RetweetButton = styled.button``;
const LikeButton = styled.button``;
const SaveButton = styled.button``;

export default ActionBar;
