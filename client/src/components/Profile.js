import React, { useState, useEffect, useContext } from "react";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { COLORS } from "../constants";
import moment from "moment";

import ErrorScreen from "./Errors/ErrorScreen";
import { CurrentUserContext } from "./CurrentUserContext";
import LoadingWheel from "./LoadingWheel";
import ProfileBar from "./ProfileBar";

const Profile = () => {
  const { error } = useContext(CurrentUserContext);

  const [handle, setHandle] = useState(null);
  const [status, setStatus] = useState("loading");
  const { profileId } = useParams();

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHandle(data);
        setStatus("idle");
      });
  }, [profileId]);

  if (error === true) {
    return <ErrorScreen />;
  }

  if (status === "idle") {
    const user = handle.profile;
    return (
      <Wrapper>
        <Banner src={user.bannerSrc} />
        <ProfilePic src={user.avatarSrc} />
        <FollowButton>Follow</FollowButton>
        <Name>{user.displayName}</Name>
        <Handle>@{user.handle}</Handle>
        <Bio>{user.bio}</Bio>
        <Details>
          <p>
            <FiMapPin />
            {user.location}
          </p>
          <p>
            <FiCalendar />
            Joined {moment(user.joined).format("MMMM YYYY")}
          </p>
        </Details>
        <Follows>
          <p>
            <span>{user.numFollowing}</span> Following
          </p>
          <p>
            <span>{user.numFollowers}</span> Followers
          </p>
        </Follows>
        <ProfileBar profileId={profileId} />
      </Wrapper>
    );
  } else {
    return <LoadingWheel />;
  }
};

export default Profile;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProfilePic = styled.img`
  position: absolute;
  top: 175px;
  margin-left: 20px;
  border: solid white 5px;
  height: 150px;
  width: 150px;
  border-radius: 75px;
  object-position: center;
`;
const Banner = styled.img`
  margin-bottom: 100px;
  height: 250px;
  object-fit: cover;
  object-position: center;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 22px;
  padding: 5px 20px;
`;
const Handle = styled.p`
  padding: 0px 20px;
  color: grey;
`;
const Bio = styled.p`
  padding: 15px 20px;
`;

const FollowButton = styled.button`
  position: absolute;
  right: 25px;
  top: 275px;
  width: 180px;
  padding: 10px 25px;
  font-size: 20px;
  background-color: ${COLORS.primary};
  border: none;
  color: white;
  border-radius: 25px;
`;

const Follows = styled.div`
  display: flex;
  p {
    padding: 15px 20px 20px;
    span {
      font-weight: bold;
    }
  }
`;
const Details = styled.div`
  display: flex;
  svg {
    padding-right: 5px;
  }
  p {
    padding: 0px 20px;
    color: grey;
  }
`;
