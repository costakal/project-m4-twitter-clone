import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

import ActionBar from "./ActionBar";
import ErrorScreen from "./Errors/ErrorScreen";
import { CurrentUserContext } from "./CurrentUserContext";
import LoadingWheel from "./LoadingWheel";

const TweetDetails = () => {
  const { error } = useContext(CurrentUserContext);
  const [tweet, setTweet] = useState(null);
  const [status, setStatus] = useState("loading");
  const { tweetId } = useParams();

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTweet(data);
        setStatus("idle");
      });
  }, []);

  if (error === true) {
    return <ErrorScreen />;
  }

  if (status === "idle") {
    const singleTweet = tweet.tweet;
    return (
      <div key={singleTweet.id}>
        <TweetHeader>
          <TweetProfilePhoto src={singleTweet.author.avatarSrc} />
          <div>
            <h2>{singleTweet.author.displayName}</h2>
            <p>@{singleTweet.author.handle}</p>
          </div>
        </TweetHeader>
        <Status>{singleTweet.status}</Status>
        {singleTweet.media.map((photo) => {
          if (photo !== []) {
            return <ContentPhoto key={singleTweet.id} src={photo.url} />;
          }
        })}
        <DateTime>
          {moment(singleTweet.timestamp).format("h:mm A · MMM Do, YYYY")}
        </DateTime>
        <ActionBar />
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

export default TweetDetails;

const TweetProfilePhoto = styled.img`
  padding: 20px 15px 20px 20px;
  width: 75px;
  height: 75px;
  border-radius: 70px;
`;

const TweetHeader = styled.div`
  display: flex;
  h2 {
    padding: 35px 0px 5px;
    font-weight: 700;
  }
  p {
    color: grey;
  }
`;

const ContentPhoto = styled.img`
  padding: 20px 20px 0px;
  height: 58vh;
  width: 90%;
  border-radius: 50px;
  object-fit: cover;
`;

const Status = styled.p`
  font-size: 24px;
  padding-left: 20px;
`;

const DateTime = styled.p`
  padding: 20px;
  color: grey;
`;
