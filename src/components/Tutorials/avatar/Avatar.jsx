import React from "react";
import "./avatar.css";

function Avatar(props) {
  return !props.class ? (
    <div className="avatar-image-container">
      <img
        className="avatar-image"
        src={props.img}
        alt={props.name}
        title={props.name}
      />
    </div>
  ) : (
    <div className={`avatar-image-container ${props.class}`}>
      <img
        className="avatar-image"
        src={props.img}
        alt={props.name}
        title={props.name}
      />
    </div>
  );
}

export default Avatar;
