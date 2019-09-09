import React from "react";
import { Link } from "react-router-dom";

import defaultImages from "../../../imgs/placeholders";

import "./robotServer.css";

const DisplayRobotServer = ({
  serverName,
  defaultChannel,
  displayClasses,
  liveDevices,
  followed
}) => {
  return (
    <Link to={`/${serverName}/${defaultChannel}`}>
      <div className={displayClasses}>
        <img
          className={
            liveDevices.length > 0
              ? "display-robot-server-img live"
              : "display-robot-server-img"
          }
          alt=""
          src={defaultImages.default01}
        />
        <div className={"display-robot-server"}>{serverName}</div>
      </div>
    </Link>
  );
};

export default DisplayRobotServer;
