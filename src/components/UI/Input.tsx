import classes from "./Input.module.css";

export interface InputProps {
  id: string;
  type: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
}

const Input = (props: { input: InputProps; label: string }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
