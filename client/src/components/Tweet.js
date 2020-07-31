import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import { FiHeart, FiDownload, FiMessageCircle, FiRepeat } from "react-icons/fi";

import { CurrentUserContext } from "./CurrentUserContext";

const Tweet = () => {
  const { homeFeed, homeFeedStatus } = useContext(CurrentUserContext);

  if (homeFeedStatus === "idle") {
    const tweetFeedObj = Object.values(homeFeed.tweetsById);

    return (
      <div>
        {tweetFeedObj.map((tweetObj) => {
          return (
            <TweetBox key={tweetObj.id}>
              <FeedDisplayImg src={tweetObj.author.avatarSrc} />
              <p>{tweetObj.author.displayName}</p>
              <p>{tweetObj.author.handle}</p>
              <p>{moment(tweetObj.timestamp).format("MMM Do")}</p>
              <p>{tweetObj.status}</p>
              {tweetObj.media.map((photo) => {
                if (photo !== []) {
                  return <FeedContentImg key="content-img" src={photo.url} />;
                }
              })}
              <button>
                <FiMessageCircle />
              </button>
              <button>
                <FiRepeat />
              </button>
              <button>
                <FiHeart />
              </button>
              <button>
                <FiDownload />
              </button>
            </TweetBox>
          );
        })}
      </div>
    );
  } else {
    return <div>Still Loading</div>;
  }
};

export default Tweet;

const TweetBox = styled.div`
  border: solid 1px lightgray;
`;

const FeedDisplayImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

const FeedContentImg = styled.img`
  margin: 20px;
  border-radius: 25px;

  height: 400px;
  object-fit: cover;
`;
