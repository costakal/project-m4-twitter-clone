import React from "react";
import Icon from "react-icons-kit";
import { refreshCw as loader } from "react-icons-kit/feather/refreshCw";
import styled, { keyframes } from "styled-components";

const LoadingWheel = () => {
  return (
    <Spinner>
      <Icon
        icon={loader}
        size={20}
        style={{
          display: "block",
          width: "25px",
          height: "25px",
          position: "absolute",
          textAlign: "center",
          top: 0,
          left: 0,
        }}
      />
    </Spinner>
  );
};

const spin = keyframes`
from { 
    transform: rotate(0deg);
}
to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  position: relative;
  width: 25px;
  height: 25px;

  animation: ${spin} 1s linear infinite;
`;

export default LoadingWheel;
