// import { BiErrorCircle } from "react-icons/bi";
// import { BsCheckAll } from "react-icons/bs";

export const TextField = ({
  inputType,
  labelText,
  iconName,
  changeHandler,
  blurHandler,
  value,
  name,
  error,
  touched,
}) => {
  return (
    <div
      className={`_input_Card mt-2 ${
        error && touched ? "_input_Card_failure" : ""
      } ${!error && !touched && "_input_Card_success"} `}
    >
      <div className="_icon_View">{iconName}</div>
      <input
        type={inputType}
        placeholder={labelText}
        onChange={changeHandler}
        onBlur={blurHandler}
        value={value}
        name={name}
        autoComplete="off"
      />
      <div className="_validation_icon">
        {error && touched && "😡"}
        {!error && touched && "😍"}
      </div>
    </div>
  );
};

export const CheckboxField = ({ inputType, labelText, checkValue }) => {
  return (
    <input
      type={inputType}
      id={labelText}
      name={labelText}
      value={checkValue}
    />
  );
};

export const Button = ({ fieldType, defaultClass, btnName, btnType, icon }) => {
  return (
    <button
      type={fieldType}
      className={
        btnType === "gradient"
          ? `${defaultClass} gradient`
          : `${defaultClass} blue`
      }
    >
      {btnName} {icon}
    </button>
  );
};
