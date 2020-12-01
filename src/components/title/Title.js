import React from "react";

import titleImg from "../../assets/underline.png";

import "./title.style.css";

const Title = () => {
  return (
    <div className="title">
      <h1 className="main-title">MyOrganizer</h1>
      <img src={titleImg} alt="" />
    </div>
  );
};

export default Title;
