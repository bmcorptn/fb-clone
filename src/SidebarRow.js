import React from "react";
import { Avatar, Icon } from "@material-ui/core";
import "./SidebarRow.css";
function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} alt="User Name" />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
