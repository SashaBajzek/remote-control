import React from "react";

import "./Toggle.scss";

const Toggle = ({ critical, label, name, onClick, toggle }) => {
  const toggleOn = () => {
    return (
      <div className={handleType()}>
        <div className="toggle-pip-on" />
      </div>
    );
  };

  const handleType = () => {
    if (critical) return "toggle-on critical";
    return "toggle-on";
  };

  const toggleOff = () => {
    return (
      <div className="toggle-off">
        <div className="toggle-pip-off" />
      </div>
    );
  };

  return (
    // <div className="Toggle">
    //   <label className="toggle-label" for="toggle">
    //     {label}
    //   </label>
    //   <input
    //     name="toggle"
    //     type="checkbox"
    //     checked={toggle}
    //     onClick={toggle => onClick(!toggle)}
    //   />
    //   <span>{toggle ? "ON" : "OFF"}</span>
    //   <div className="toggle-pip-on" />
    // </div>
    <div className="Toggle">
      <input
        checked={toggle}
        className="Toggle_input"
        id={name}
        type="checkbox"
        onClick={toggle => onClick(!toggle)}
      />
      <label for={name}>
        <div
          className="Toggle__switch"
          data-checked="On"
          data-unchecked="Off"
        ></div>
        <div className="Toggle__label-text">{label}</div>
      </label>
    </div>
  );
};

export default Toggle;
