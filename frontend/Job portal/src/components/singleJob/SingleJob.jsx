import PropTypes from "prop-types";
import "./singleJob.scss";
import localtion from "../../assets/images/location.svg";
import post from "../../assets/images/post.svg";
import user from "../../assets/images/user.svg";
import code from "../../assets/images/code.svg";

SingleJob.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  // benefits: PropTypes.string.isRequired,
};

export default function SingleJob({
  title,
  description,
  createdBy,
  company,
  level,
  location,
  requirement,
  // benefits,
}) {
  return (
    <div className="job-item px-3 px-md-4">
      <h2 className="title text-start">{title}</h2>
      <p className="description mb-1">
        Description:
        <span>{description}</span>
      </p>
      <div className="row my-2">
        <h3 className="description col-12 col-lg-6 mb-0">
          <span>
            <img src={user} alt="location-icon" />
          </span>
          : <span> {createdBy}</span>
        </h3>
        <h3 className="description col-12 col-lg-6 mb-0">
          <span>
            <img src={post} alt="location-icon" />
          </span>
          : <span> {company}</span>
        </h3>
        <h3 className="description col-12 col-lg-6 mb-0">
          <span>
            <img src={code} alt="location-icon" />
          </span>
          : <span> {level}</span>
        </h3>
        <h3 className="description col-12 col-lg-6 mb-0">
          <span>
            <img src={localtion} alt="location-icon" />
          </span>
          : <span> {location}</span>
        </h3>
      </div>

      <p className="description mb-1">
        Requirements:
        <span>
          {requirement ? requirement : <span>No requirements defined</span>}
        </span>
      </p>
      {/* <p className="description mb-0">
        Benefits:
        <span>{benefits}</span>
      </p> */}
    </div>
  );
}
