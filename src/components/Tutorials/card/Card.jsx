import React from "react";
import Avatar from "../avatar/Avatar";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
        <span className="card-id-badge">{props.id + 1}</span>
      <div className="card-title flex">
        <h3 className="card-title-content">{props.name}</h3>
        <Avatar
          class="translate-bottom-right"
          name={props.name}
          img={props.img}
        />
      </div>
      <div className="card-body">
        <p className="person-phone">{props.tel}</p>
        <p className="person-email">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
