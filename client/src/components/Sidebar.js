import React from "react";
import styled from "styled-components";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Sidebar = () => {
  return (
    <Wrapper>
      <Logo />
      <Link to="/">
        <FiHome />
        <span>Home</span>
      </Link>
      <Link to="/:profileId">
        <FiUser />
        <span>Profile</span>
      </Link>
      <Link to="/notifications">
        <FiBell />
        <span>Notifications</span>
      </Link>
      <Link to="/bookmarks">
        <FiBookmark />
        <span>Bookmarks</span>
      </Link>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 400px;
  z-index: 1;
  border-right: 1px solid grey;
  text-align: right;
  a {
    display: flex;
    margin: 5;
    padding: 15px;
    text-decoration: none;
    color: black;
    span {
      margin-left: 20px;
    }
  }
`;
