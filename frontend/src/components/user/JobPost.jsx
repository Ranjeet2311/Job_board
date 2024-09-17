import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Accordian from "../accordian/Accordian";
import trashIcon from "../../assets/images/trash.png";
import editIcon from "../../assets/images/edit.png";
import { useDispatch } from "react-redux";
import { deleteData, fetchJobs } from "../../features/jobSlice";
import "./user.scss";
import post from "../../assets/images/post.png";
// import user from "../../assets/images/user.svg";
import code from "../../assets/images/code.png";
import calender from "../../assets/images/calendar.png";
import localtion from "../../assets/images/location.png";
import close from "../../assets/images/close.png";
import Button from "../buttons/Button";
import { format } from "date-fns";
import EditPost from "./EditPost";
import { createPortal } from "react-dom";

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
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteData(userId));
    console.log(`Delete userId :`, userId);
  };
  const handleEdit = () => {
    console.log(`Delete userId : `, userId);
    setShowModal(true);
  };

  const hideMOdal = () => {
    setShowModal(false);
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
          <div className="col-12 mb-4">
            <h2>Post related actions</h2>
          </div>
          <div className="col-12 col-lg-4 d-flex">
            <Button
              className="btn btn-white w-100"
              isLInk={false}
              onButtonClick={handleDelete}
            >
              <img height={20} src={trashIcon} alt="trash-icon" />
            </Button>
          </div>
          <div className="col-12 col-lg-4 d-flex my-4 my-lg-0">
            <Button
              isLInk={false}
              className="btn btn-white mx-4 w-100"
              onButtonClick={handleEdit}
            >
              <img height={20} src={editIcon} alt="edit-icon" />
            </Button>
          </div>
          <div className="col-12 col-lg-4 d-flex">
            {/* {showModal && (
              <Button
                isLInk={false}
                className="btn btn-white w-100"
                onButtonClick={hideMOdal}
              >
                <img height={20} src={close} alt="edit-icon" /> close
              </Button>
            )} */}
          </div>
        </div>
      </Accordian>

      {showModal &&
        createPortal(
          <>
            <dialog open className="dialog">
              <div className="editform">
                <EditPost
                  userId={userId}
                  title={title}
                  description={description}
                  createdBy={createdBy}
                  company={company}
                  level={level}
                  location={location}
                  requirement={requirement}
                  benefits={benefits}
                />
                <Button
                  isLInk={false}
                  className="btn btn-white w-100"
                  onButtonClick={hideMOdal}
                >
                  <img height={20} src={close} alt="edit-icon" />
                  <span className="ms-2 text-primary">Close</span>
                </Button>
              </div>
            </dialog>
          </>,
          document.getElementById("modal")
        )}

      {/* {showModal && (
        <EditPost
          userId={userId}
          title={title}
          description={description}
          createdBy={createdBy}
          company={company}
          level={level}
          location={location}
          requirement={requirement}
          benefits={benefits}
        />
      )} */}
    </div>
  );
}
