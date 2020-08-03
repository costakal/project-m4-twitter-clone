import React from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { u1F4A3 as bomb } from "react-icons-kit/noto_emoji_regular/u1F4A3";

const ErrorScreen = () => {
  return (
    <Error>
      <Icon icon={bomb} size={75} />
      <h2>An unknown error has occcured.</h2>
      <p>
        Please try refreshing the page, or <a href="/">contact support</a> if
        the problem persists.
      </p>
    </Error>
  );
};

export default ErrorScreen;

const Error = styled.div`
  text-align: center;
  padding: 60px 120px;
  line-height: 25px;
  h2 {
    font-size: 24px;
    font-weight: bold;
    padding: 40px 20px;
  }
  p {
    font-size: 18px;
  }
`;
