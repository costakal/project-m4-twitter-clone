import React from "react";
import { FiHeart, FiDownload, FiMessageCircle, FiRepeat } from "react-icons/fi";

const ActionBar = () => {
  return (
    <>
      <button>
        <FiMessageCircle />
      </button>
      <button>
        <FiRepeat />
      </button>
      <button>
        <FiHeart />
      </button>
      <button>
        <FiDownload />
      </button>
    </>
  );
};

export default ActionBar;
