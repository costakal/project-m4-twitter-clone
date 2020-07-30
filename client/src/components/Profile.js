import React, { useContext } from "react";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import styled from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";

const Profile = () => {
  const { currentUser, status } = useContext(CurrentUserContext);

  if (status === "idle") {
    const user = currentUser.profile;
    return (
      <Wrapper>
        <Banner src={user.bannerSrc} />
        <ProfilePic src={user.avatarSrc} />
        <button>Follow</button>
        <p>{user.displayName}</p>
        <p>@{user.handle}</p>
        <p>{user.bio}</p>
        <p>
          <FiMapPin />
          {user.location}
        </p>
        <p>
          <FiCalendar />
          {user.joined}
        </p>
      </Wrapper>
    );
  } else {
    return <div>Still Loading</div>;
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
`;
