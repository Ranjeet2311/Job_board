import { Link } from "react-router-dom";
import "./button.scss";

/* eslint-disable react/prop-types */

export default function Button({
  isLInk,
  to,
  style,
  children,
  className,
  onButtonClick,
}) {
  if (isLInk) {
    return (
      <Link to={to} style={{ ...style }} className={`btn ${className}`}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        onClick={onButtonClick ? onButtonClick : undefined}
        className={`btn ${className}`}
        style={{ ...style }}
      >
        {children}
      </button>
    );
  }
}
