import React from "react";
import styled from "styled-components";

const ActionButton = ({ color, size, children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Wrapper
      onClick={(ev) => {
        ev.preventDefault();
        console.log("You pressed the button");
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      circleColor={color}
      style={{ width: size, height: size, color: isHovered ? color : null }}
    >
      {children}
    </Wrapper>
  );
};

export default ActionButton;

const Wrapper = styled.button`
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    opacity: 0;
    background-color: ${(p) => p.circleColor};
  }
  &:focus:after,
  &:hover:after {
    opacity: 0.12;
  }
`;
