import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import ActionBar from "./ActionBar";
import Retweets from "./Retweets";

const Tweet = ({ tweetObj }) => {
  const history = useHistory();
  return (
    <>
      <Link
        to={`/tweet/${tweetObj.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <TweetBox key={tweetObj.id}>
          <Retweets tweetObj={tweetObj} />
          <TweetSection>
            <FeedDisplayImg src={tweetObj.author.avatarSrc} />
            <TweetContent>
              <TweetProfileInfo>
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
                  <ProfileDisplayName>
                    {tweetObj.author.displayName}
                  </ProfileDisplayName>
                </ProfileLink>
                <SmallText>
                  <p>@{tweetObj.author.handle}</p>
                  <p>·</p>
                  <p>{moment(tweetObj.timestamp).format("MMM Do")}</p>
                </SmallText>
              </TweetProfileInfo>
              <TweetStatus>{tweetObj.status}</TweetStatus>
              {tweetObj.media.map((photo) => {
                if (photo !== []) {
                  return <FeedContentImg key="content-img" src={photo.url} />;
                }
              })}
            </TweetContent>
          </TweetSection>
          <ActionBar />
        </TweetBox>
      </Link>
    </>
  );
};

export default Tweet;

const TweetBox = styled.div`
  border: solid 1px #f0f0f0;
`;
const TweetSection = styled.div`
  display: flex;
`;
const ProfileDisplayName = styled.p`
  font-size: 16px;
`;
const TweetProfileInfo = styled.div`
  display: flex;
  align-items: center;
  p {
    padding: 10px 5px 5px;
  }
`;
const SmallText = styled.div`
  display: flex;
  font-size: 14px;
  color: grey;
`;
const TweetContent = styled.div``;

const TweetStatus = styled.p`
  padding: 5px;
`;

const ProfileLink = styled.div`
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
const FeedDisplayImg = styled.img`
  padding: 8px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
`;
const FeedContentImg = styled.img`
  padding: 10px 5px;
  border-radius: 25px;
  height: 500px;
  width: 80%;
  max-width: 500px;
  object-fit: cover;
`;
