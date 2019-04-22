import React from "react";

const Button = ({ onClick, tag, isTrue }) => {
  return (
    <button className="btn" onClick={onClick} disabled={isTrue}>
      {tag}
    </button>
  );
};

export default Button;
