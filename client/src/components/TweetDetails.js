import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

import ActionBar from "./ActionBar";

const TweetDetails = () => {
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

  if (status === "idle") {
    const singleTweet = tweet.tweet;
    return (
      <div key={singleTweet.id}>
        <div></div>
        <img src={singleTweet.author.avatarSrc} />
        <p>{singleTweet.author.displayName}</p>
        <p>{singleTweet.author.handle}</p>
        <p>{moment(singleTweet.timestamp).format("h:mm A · MMM Do, YYYY")}</p>
        <p>{singleTweet.status}</p>
        {singleTweet.media.map((photo) => {
          if (photo !== []) {
            return <img key={singleTweet.id} src={photo.url} />;
          }
        })}
        <ActionBar />
      </div>
    );
  } else {
    return <div>Still loading</div>;
  }
};

export default TweetDetails;
