import React from "react";
import "../../styles/common.css";

const Input = React.forwardRef((props, ref) => {
  const { name, label, error, type, ...rest } = props;
  console.log("Input Props: ", type, ref);

  return (
    <React.Fragment>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor={name}>
            {label}
          </label>
          <input
            {...rest}
            ref={ref}
            type={type}
            name={name}
            className={type === "chat" ? "chat-input" : "form-control"}
            autoComplete={type === "chat" ? "off" : ""}
          />
        </div>
        {type === "chat" ||
          (error && <div className="alert alert-danger">{error}</div>)}
      </div>
    </React.Fragment>
  );
});

export default Input;
