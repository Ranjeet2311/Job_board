import PropTypes from "prop-types";
import closeIcon from "../../assets/images/close.svg";

Toast.propTypes = {
  subject: PropTypes.string.isRequired,
  textMessage: PropTypes.string || PropTypes.object,
  className: PropTypes.string.isRequired,
};

export default function Toast({ textMessage, subject, className }) {
  return (
    <div
      className={`toast show align-items-center text-white border-0 w-100 mt-4 ${className} `}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex align-self-center justify-content-start">
        <div className="toast-body my-0 py-1">
          <p className="text-center my-0">
            {subject}! {textMessage}
          </p>
        </div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto d-flex align-self-center justify-content-center"
          data-bs-dismiss="toast"
          aria-label="Close"
        >
          <img src={closeIcon} alt="close-Icon" />
        </button>
      </div>
    </div>
  );
}
