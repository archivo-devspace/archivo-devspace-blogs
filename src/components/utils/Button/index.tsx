import React from "react";
import Props from "./type";
import styles from "./button.module.css";

function Button({
  variant = "primary",
  size,
  btnType,
  buttonIcon,
  isDisable,
  handleClick,
  children,
  label,
  className,
}: Props) {
  return (
    <button
      type={btnType}
      disabled={isDisable}
      onClick={handleClick}
      className={` ${
        className ? className : `${styles.btn} ${styles[variant]}`
      } ${size}`}
    >
      {children ? (
        children
      ) : (
        <div className={`${styles.btnText}`}>
          {label && <span className={styles.label}>{label}</span>}

          {buttonIcon && (
            <div className={`${styles.btnIcon}`}>{buttonIcon}</div>
          )}
        </div>
      )}
    </button>
  );
}

export default Button;
