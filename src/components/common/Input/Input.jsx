import React from "react";
import "../../../styles/common.css";

const Input = React.forwardRef((props, ref) => {
  const { name, label, error, type, ...rest } = props;
  console.log("Input Props: ", type, ref);

  return (
    <React.Fragment>
      <div className="Input">
        <div>
          <label className="Input__label" htmlFor={name}>
            {label}
          </label>
          <input
            {...rest}
            ref={ref}
            type={type}
            name={name}
            className={type === "chat" ? "Input--chat" : "Input--control"}
            autoComplete={type === "chat" ? "off" : ""}
          />
        </div>
        {type === "chat" ||
          (error && <div className="Input__error">{error}</div>)}
      </div>
    </React.Fragment>
  );
});

export default Input;
