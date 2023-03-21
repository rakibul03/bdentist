import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-gray-400">
      {children}
    </button>
  );
};

export default PrimaryButton;
