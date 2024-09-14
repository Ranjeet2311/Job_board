import PropTypes from "prop-types";
import Accordian from "../accordian/Accordian";
import trashIcon from "../../assets/images/trash.svg";
import editIcon from "../../assets/images/edit.svg";
import { useDispatch } from "react-redux";
import { deleteData, fetchJobs } from "../../features/jobSlice";
import "./user.scss";
import post from "../../assets/images/post.svg";
// import user from "../../assets/images/user.svg";
import code from "../../assets/images/code.svg";
import calender from "../../assets/images/calender.svg";
import localtion from "../../assets/images/location.svg";
import Button from "../buttons/Button";
import { useEffect } from "react";
import { format } from "date-fns";

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

    console.log(`Delete userId :`, userId);
  };
  const handleEdit = () => {
    console.log(`Delete userId : `, userId);
  };

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="col-12 user_list_item my-3">
      <Accordian target={`${title}title`} title={title}>
        <div className="row mb-4">
          <div className="col-12 col-lg-4">
            <h2> {title} </h2>
          </div>
          <div className="col-12 col-lg-4">
            <h2>
              <span>
                <b>Created by: </b>
              </span>
              {createdBy}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-2">
            <p>
              <span>
                <img src={code} alt="location-icon" className="me-2" />
              </span>
              {level}
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p>
              <span>
                <img src={post} alt="location-icon" className="me-2" />
              </span>
              {company}
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p>
              <span>
                <img src={calender} alt="location-icon" className="me-2" />
              </span>
              {format(new Date(createdAt), "EEEE, MMMM do, yyyy")}
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <p>
              <span>
                <img src={localtion} alt="location-icon" className="me-2" />
              </span>
              {location}
            </p>
          </div>
          <div className="col-12 my-4">
            <span>
              <b>Benefits :</b>
            </span>
            <span> {benefits}</span>
          </div>
          <div className="col-12 my-4">
            <b>Description :</b>
            <span> {description}</span>
          </div>
          <div className="col-12 my-4">
            <b>Requirement :</b>
            <span>{requirement}</span>{" "}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-lg-4 d-flex justify-content-end">
            <Button
              className="btn me-4 btn-white w-100"
              isLInk={false}
              onButtonClick={handleDelete}
            >
              <img height={20} src={trashIcon} alt="trash-icon" />
            </Button>
            <Button
              isLInk={false}
              className="btn btn-white w-100"
              to="/"
              onButtonClick={handleEdit}
            >
              <img height={20} src={editIcon} alt="edit-icon" />
            </Button>
          </div>
        </div>
      </Accordian>
    </div>
  );
}
