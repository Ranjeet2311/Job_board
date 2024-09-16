import PropTypes from "prop-types";
import { Link } from "react-router-dom";

BreadCrumbs.propTypes = {
  backText: PropTypes.string.isRequired,
  backLink: PropTypes.string.isRequired,
  jobTitle: PropTypes.object.isRequired,
  jobLink: PropTypes.object.isRequired,
};

export default function BreadCrumbs({ backText, backLink, jobTitle, jobLink }) {
  return (
    <div className="text-center mb-3 d-flex align-items-center btn  mt-0 p-2 w-100">
      {/* <img height={20} src={arrowIcon} alt="back arrow" /> */}
      <Link
        className="text-decoration-none btn-blue px-3 py-1  rounded"
        to={backLink}
      >
        {backText}
      </Link>
      <span className="mx-2"> / </span>
      <Link
        className="text-decoration-none btn-blue px-3 py-1  rounded"
        to={jobLink}
      >
        {jobTitle}
      </Link>
    </div>
  );
}
