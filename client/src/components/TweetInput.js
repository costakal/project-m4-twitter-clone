import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "../constants";
import ErrorScreen from "./Errors/ErrorScreen";

const TweetInput = () => {
  const { currentUser, status, handleTweetPost, postError } = useContext(
    CurrentUserContext
  );
  const [newTweet, setNewTweet] = useState("");
  const [charCount, setCharCount] = useState(280);
  const [disable, setDisable] = useState(true);
  const [countColor, setCountColor] = useState("#d0d0d0");

  useEffect(() => {
    if (charCount >= 280 || charCount < 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    if (charCount < 55 && charCount > 0) {
      setCountColor("yellow");
    } else if (charCount <= 0) {
      setCountColor("red");
    } else {
      setCountColor("#d0d0d0");
    }
  }, [charCount]);

  if (postError === true) {
    return <ErrorScreen />;
  }

  if (status === "idle") {
    return (
      <>
        <InputBox>
          <MeowPhoto src={currentUser.profile.avatarSrc} />
          <textarea
            type="text"
            name="meow"
            placeholder="What's happening?"
            style={{ resize: "none", fontFamily: "sans-serif" }}
            onChange={(event) => {
              setNewTweet(event.target.value);
              setCharCount(280 - event.target.value.length);
            }}
          />
          <CharacterCounter style={{ color: countColor }}>
            {charCount}
          </CharacterCounter>
          <MeowButton
            disabled={disable}
            onClick={() => {
              handleTweetPost(newTweet);
            }}
          >
            Meow
          </MeowButton>
        </InputBox>
      </>
    );
  } else {
    return <></>;
  }
};

export default TweetInput;

const InputBox = styled.div`
  position: relative;
  display: flex;
  border-bottom: 10px solid ${COLORS.border};
  textarea {
    padding: 10px;
    font-size: 20px;
    outline: none;
    width: 99%;
    height: 180px;
    border: none;
    &:focus::-webkit-input-placeholder {
      color: #d0d0d0;
    }
  }
`;
const CharacterCounter = styled.p`
  color: #d0d0d0;
`;

const MeowPhoto = styled.img`
  padding: 8px;
  height: 50px;
  width: 50px;
  border-radius: 35px;
`;

const MeowButton = styled.button`
  position: absolute;
  top: 135px;
  right: 5px;
  margin: 10px;
  padding: 12px 18px;
  color: white;
  font-size: 20px;
  background-color: ${COLORS.primary};
  border: none;
  border-radius: 25px;
  &:disabled {
    background-color: ${COLORS.secondary};
  }
`;
