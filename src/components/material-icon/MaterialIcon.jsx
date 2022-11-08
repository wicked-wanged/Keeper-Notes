import React from "react";

import "./material-icon.css";

function MaterialIcon(props) {
  return (
    <button
      type="button"
      className="material-btn"
      title={props.title}
      style={{ color: `${props.color}` }}
      onMouseOver={(e)=>{
        e.target.classList.add('black')
      }}
      onMouseOut={(e)=>{
        e.target.classList.remove('black')
      }}
    >
      {props.children}
    </button>
  );
}

export default MaterialIcon;
