import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "../constants";

const TweetInput = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  const [newTweet, setNewTweet] = useState(null);
  const [charCount, setCharCount] = useState(280);
  const [disable, setDisable] = useState(true);
  const [countColor, setCountColor] = useState("#d0d0d0");

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "your text here" }),
    };
    fetch("/api/tweet", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setNewTweet(data);
      });
  }, []);

  const handleDisable = () => {
    if (charCount > 280 && charCount < 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  const handleColor = () => {
    if (charCount < 55) {
      return "yellow";
    } else if (charCount < 0) {
      return "red";
    }
  };

  if (status === "idle") {
    return (
      <>
        <form>
          <InputBox>
            <MeowPhoto src={currentUser.profile.avatarSrc} />
            <textarea
              type="text"
              name="meow"
              placeholder="What's happening?"
              style={{ resize: "none", fontFamily: "sans-serif" }}
              onChange={(event) => {
                setCharCount(280 - event.target.value.length);
              }}
            />
            <CharacterCounter>{charCount}</CharacterCounter>
            <MeowButton disabled={disable}>Meow</MeowButton>
          </InputBox>
        </form>
      </>
    );
  } else {
    return <></>;
  }
};

export default TweetInput;

const InputBox = styled.div`
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
  top: 185px;
  left: 965px;
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
