import React from "react";
import { Avatar } from "@material-ui/core";
import "./Story.css";

function Story(props) {
  return (
    <div style={{ backgroundImage: `url(${props.image})` }} className="story">
      <Avatar src={props.profileSrc} className="story__avatar" />
      <h4>{props.title}</h4>
    </div>
  );
}

export default Story;
