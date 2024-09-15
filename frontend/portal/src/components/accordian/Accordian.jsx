import PropTypes from "prop-types";
import "./accordian.scss";

Accordian.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
  target: PropTypes.string.isRequired,
};

export default function Accordian({ title, target, children }) {
  const randomNumber = Math.floor(Math.random() * 100000);
  const toggle = target.replaceAll(" ", "") + randomNumber;
  return (
    <div className="accordion my-1" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button btn-blue text-"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${toggle}`}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {title}
          </button>
        </h2>
        <div
          id={toggle}
          className="accordion-collapse collapse hide"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
