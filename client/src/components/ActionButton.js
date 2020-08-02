import React from "react";
import styled from "styled-components";

const ActionButton = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Wrapper
    // //   onClick={onClick}
    // //   onMouseEnter={() => setIsHovered(true)}
    // //   onMouseLeave={() => setIsHovered(false)}
    // //   circleColor={color}
    // //   style={{ width: size, height: size, color: isHovered ? color : null }}
    >
      {/* // {children} */}
    </Wrapper>
  );
};

export default ActionButton;

const Wrapper = styled.div``;
