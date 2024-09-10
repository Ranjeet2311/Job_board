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
      <Link
        to={to}
        style={{ ...style }}
        className={`btn py-1 px-3 ${className}`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        onClick={onButtonClick ? onButtonClick : undefined}
        className={`btn py-1 px-3 ${className}`}
        style={{ ...style }}
      >
        {children}
      </button>
    );
  }
}
