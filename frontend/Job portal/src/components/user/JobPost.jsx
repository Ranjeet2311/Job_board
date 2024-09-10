import PropTypes from "prop-types";
import Accordian from "../accordian/Accordian";
import trashIcon from "../../assets/images/trash.svg";
import editIcon from "../../assets/images/edit.svg";
import { useDispatch } from "react-redux";
import { deleteData, fetchJobs } from "../../features/jobSlice";

JobPost.propTypes = {
  userId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  benefits: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default function JobPost({
  userId,
  title,
  description,
  createdBy,
  company,
  level,
  location,
  requirement,
  benefits,
  createdAt,
}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteData(userId));
    dispatch(fetchJobs());

    console.log(`Delete userId :`, userId);
  };
  const handleEdit = () => {
    console.log(`Delete userId : `, userId);
  };

  return (
    <div className="col-12 user_list_item my-3">
      <div className="row mb-4">
        <div className="col-12 col-lg-4">
          <p>Title : {title} </p>
        </div>
        <div className="col-12 col-lg-4">
          <p> Admin: {createdBy} </p>
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-end">
          <button className="btn me-4" to="/" onClick={handleDelete}>
            <img
              className="image_filter"
              height={20}
              src={trashIcon}
              alt="trash-icon"
            />
          </button>
          <button className="btn" to="/" onClick={handleEdit}>
            <img
              className="image_filter"
              height={20}
              src={editIcon}
              alt="edit-icon"
            />
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <p>level: {level} </p>
        </div>
        <div className="col-12 col-md-4">
          <p> company: {company} </p>
        </div>
        <div className="col-12 col-md-4">
          <p> Post date: {createdAt} </p>
        </div>
        <div className="col-12 col-md-4">
          <p> Location: {location} </p>
        </div>
        <div className="col-12">
          <Accordian target={title} title="benefits">
            {benefits}
          </Accordian>
        </div>
        <div className="col-12">
          <Accordian target={title} title="description">
            {description}
          </Accordian>
        </div>
        <div className="col-12">
          <Accordian target={title} title="requirement">
            {requirement}
          </Accordian>
        </div>
      </div>
    </div>
  );
}
