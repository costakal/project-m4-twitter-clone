import React, { useContext } from "react";
import styled from "styled-components";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { COLORS } from "../constants";
import { CurrentUserContext } from "./CurrentUserContext";

const Sidebar = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  if (status === "idle") {
    return (
      <Wrapper>
        <Logo style={{ margin: "15px 0px" }} />
        <NavLink exact to="/" activeStyle={{ color: COLORS.primary }}>
          <button>
            <FiHome />
            <span>Home</span>
          </button>
        </NavLink>
        <NavLink
          to={`/${currentUser.profile.handle}`}
          activeStyle={{ color: COLORS.primary }}
        >
          <button>
            <FiUser />
            <span>Profile</span>
          </button>
        </NavLink>
        <NavLink to="/notifications" activeStyle={{ color: COLORS.primary }}>
          <button>
            <FiBell />
            <span>Notifications</span>
          </button>
        </NavLink>
        <NavLink to="/bookmarks" activeStyle={{ color: COLORS.primary }}>
          <button>
            <FiBookmark />
            <span>Bookmarks</span>
          </button>
        </NavLink>
      </Wrapper>
    );
  } else {
    return <div></div>;
  }
};

export default Sidebar;

const Wrapper = styled.div`
  position: fixed;
  padding: 0px 15px 0px 40px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 220px;
  z-index: 1;
  border-right: 1px solid #f0f0f0;
  a {
    display: flex;
    cursor: default;
    text-decoration: none;
    color: black;
    button {
      cursor: pointer;
      background: none;
      border: none;
      font-size: 20px;
      font-weight: bold;
      border-radius: 25px;
      margin: 5px;
      padding: 15px;
      color: inherit;
      outline: none;
      display: flex;
      align-items: center;
      &:hover {
        color: ${COLORS.primary};
        background: ${COLORS.secondary};
      }
    }
    span {
      margin-left: 20px;
    }
  }
`;
