import React, { useContext } from "react";
import styled from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";

const TweetInput = () => {
  const { currentUser, status } = useContext(CurrentUserContext);

  if (status === "idle") {
    return (
      <>
        <InputBox>
          <MeowPhoto src={currentUser.profile.avatarSrc} />
          <input type="text" name="meow" placeholder="What's happening?" />
        </InputBox>
        <button>Meow</button>
      </>
    );
  } else {
    return <></>;
  }
};

export default TweetInput;

const InputBox = styled.div`
  display: flex;
  input {
    width: 99%;
    height: 200px;
    border: none;
  }
`;

const MeowPhoto = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;
