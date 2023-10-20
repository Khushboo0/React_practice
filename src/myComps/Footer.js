import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "absolute",
    width: "100%",
    bottom: "0px",
  };
  return (
    <div className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Footer</p>
    </div>
  );
};
