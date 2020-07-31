import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

import { CurrentUserContext } from "./CurrentUserContext";
import ActionBar from "./ActionBar";

const TweetFeed = () => {
  const { homeFeed, homeFeedStatus } = useContext(CurrentUserContext);
  const history = useHistory();

  if (homeFeedStatus === "idle") {
    const tweetFeedObj = Object.values(homeFeed.tweetsById);
    return (
      <div>
        {tweetFeedObj.map((tweetObj) => {
          return (
            <Link
              to={`/tweet/${tweetObj.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <TweetBox key={tweetObj.id}>
                <FeedDisplayImg src={tweetObj.author.avatarSrc} />
                <ProfileLink
                  tabIndex="0"
                  aria-label="View Tweet"
                  style={{ cursor: "pointer" }}
                  onMouseDown={() => {
                    history.push(`/${tweetObj.author.handle}`);
                  }}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      history.push(`/${tweetObj.author.handle}`);
                    }
                  }}
                >
                  <p>{tweetObj.author.displayName}</p>
                </ProfileLink>
                <p>{tweetObj.author.handle}</p>
                <p>{moment(tweetObj.timestamp).format("MMM Do")}</p>
                <p>{tweetObj.status}</p>
                {tweetObj.media.map((photo) => {
                  if (photo !== []) {
                    return <FeedContentImg key="content-img" src={photo.url} />;
                  }
                })}
                <ActionBar />
              </TweetBox>
            </Link>
          );
        })}
      </div>
    );
  } else {
    return <div>Still Loading</div>;
  }
};

export default TweetFeed;

const TweetBox = styled.div`
  border: solid 1px lightgray;
`;

const ProfileLink = styled.div`
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
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
