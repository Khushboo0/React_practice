import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "fixed",
    width: "100%",
    
    bottom:'0',
  };
  return (
    <div className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Footer</p>
    </div>
  );
};
