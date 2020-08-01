import React, { useState, useEffect } from "react";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import TweetFeed from "./TweetFeed";

const Profile = () => {
  const [handle, setHandle] = useState(null);
  const [status, setStatus] = useState("loading");
  const { profileId } = useParams();

  console.log(useParams());

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHandle(data);
        setStatus("idle");
      });
  }, []);

  if (status === "idle") {
    const user = handle.profile;
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
        <TweetFeed />
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
  object-fit: cover;
  object-position: center;
`;
