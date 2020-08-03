import React from "react";
import styled from "styled-components";
import { FiHeart, FiDownload, FiMessageCircle, FiRepeat } from "react-icons/fi";
import ActionButton from "./ActionButton";

const ActionBar = ({ data }) => {
  return (
    <ButtonSection>
      <ActionButton color="rgb(27, 149, 224)" size={40}>
        <FiMessageCircle />
      </ActionButton>
      <ActionButton color="rgb(23, 191, 99)" size={40}>
        {/* onClick={handleToggleRetweet} */}
        <FiRepeat />
      </ActionButton>
      <ActionButton color="rgb(224, 36, 94)" size={40}>
        {/* onClick={handleToggleLike} */}
        <FiHeart />
      </ActionButton>
      <ActionButton color="rgb(27, 149, 224)" size={40}>
        <FiDownload />
      </ActionButton>
    </ButtonSection>
  );
};

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
  max-width: 750px;
  button {
    padding: 5px;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    color: black;
    cursor: pointer;
    &:active {
      color: inherit;
    }
  }
`;

export default ActionBar;
