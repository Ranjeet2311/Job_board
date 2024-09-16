import PropTypes from "prop-types";
import { truncateText } from "../../utils/textUtils";
import "./singleJob.scss";
import localtion from "../../assets/images/location.png";
import post from "../../assets/images/post.png";
import user from "../../assets/images/user.png";
import code from "../../assets/images/code.png";
import calender from "../../assets/images/calendar.png";
import { Link } from "react-router-dom";
import { format } from "date-fns";

SingleJob.propTypes = {
  pageLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  // benefits: PropTypes.string.isRequired,
};

export default function SingleJob({
  pageLink,
  title,
  description,
  createdBy,
  createdAt,
  company,
  level,
  location,
  requirement,
  // benefits,
}) {
  const shortDescription = truncateText(description, 80);
  const shortRequirement = truncateText(requirement, 80);
  const shortLocation = truncateText(location, 30);

  return (
    <Link to={pageLink} className="job-item px-md-4">
      <h2 className="title text-start">{title}</h2>
      <p className="description">
        Description:
        <span> truncateText {shortDescription}</span>
      </p>
      <div className="row my-2 card-mid">
        <div className="description col-6 d-flex align-items-center mb-0">
          <span>
            <img src={user} alt="user-icon" className="mb-0" />
          </span>
          <span> {createdBy}</span>
        </div>
        <div className="description col-6 d-flex align-items-center mb-0">
          <span>
            <img src={post} alt="company-icon" className="mb-0" />
          </span>
          <span> {company}</span>
        </div>
        <div className="description col-6 d-flex align-items-center  mb-0">
          <span>
            <img src={code} alt="code-icon" className="mb-0" />
          </span>
          <span> {level}</span>
        </div>
        <div className="description col-6 d-flex align-items-center  mb-0">
          <span>
            <img src={calender} alt="calendar-icon" className="mb-0" />
          </span>
          <span>{format(new Date(createdAt), "do MMMM")} </span>
        </div>
        <div className="description col-12 d-flex align-items-center  mb-0">
          <span>
            <img src={localtion} alt="location-icon" className="mb-0" />
          </span>
          <span>{shortLocation} </span>
        </div>
      </div>

      <p className="description mb-1">
        Requirements:
        <span>
          {requirement ? (
            shortRequirement
          ) : (
            <span>No requirements defined</span>
          )}
        </span>
      </p>
      {/* <p className="description mb-0">
        Benefits:
        <span>{benefits}</span>
      </p> */}
    </Link>
  );
}
