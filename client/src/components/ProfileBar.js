import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProfileFeed from "./ProfileFeed";

const ProfileBar = ({ profileId }) => {
  return (
    <div>
      <ProfileLinks>
        <Link exact path={`/${profileId}`}>
          Tweets
        </Link>
        <Link exact path={`/${profileId}/media`}>
          Media
        </Link>
        <Link exact path={`/${profileId}/likes`}>
          Likes
        </Link>
      </ProfileLinks>
    </div>
  );
};

export default ProfileBar;

const ProfileLinks = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  a {
    text-align: center;
    padding: 20px;
  }
`;
