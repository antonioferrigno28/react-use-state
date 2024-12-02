import React from "react";

function Button({ title, isActive, onClick }) {
  return (
    <button
      className={`btn ${isActive ? "btn-warning" : "btn-primary"} mx-1`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
