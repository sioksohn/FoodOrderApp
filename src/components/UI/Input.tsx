import React from "react";
import classes from "./Input.module.css";

export interface InputProps {
  id: string;
  type: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
}

const Input = React.forwardRef(
  (props: { input: InputProps; label: string; ref: any }, ref: any) => {
    return (
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
      </div>
    );
  }
);

export default Input;
