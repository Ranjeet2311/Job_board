import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../toast/Toast";
import spinner from "../../assets/images/spin.svg";
import xss from "xss";
import { trimWhiteSpace } from "../../utils/textUtils";
import { updateData } from "../../features/jobSlice";

EditPost.propTypes = {
  userId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  benefits: PropTypes.string.isRequired,
};

export default function EditPost({
  userId,
  title,
  description,
  createdBy,
  company,
  level,
  location,
  requirement,
  benefits,
}) {
  const [showToast, setShowToast] = useState(false);
  const { error, pending, success } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const handleEditpost = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedPost = {
      title: xss(trimWhiteSpace(formData.get("title"))),
      description: xss(trimWhiteSpace(formData.get("description"))),
      createBy: xss(trimWhiteSpace(formData.get("createBy"))),
      company: xss(trimWhiteSpace(formData.get("company"))),
      location: xss(trimWhiteSpace(formData.get("location"))),
      level: level || xss(trimWhiteSpace(formData.get("level"))),
      requirement: xss(trimWhiteSpace(formData.get("requirement"))),
      benefits: xss(trimWhiteSpace(formData.get("benefits"))),
    };

    console.log(`Edit`);

    dispatch(updateData({ id: userId, updateData: updatedPost }));

    console.log(`Update post click`);

    setShowToast(true);
  };

  useEffect(() => {
    // if (success || error) {
    //   setShowToast(true);

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 10000);

    return () => clearTimeout(timer); // Cleanup timer
    // }
  }, [success, error]);

  return (
    <div>
      <form className="w-100 mx-auto mt-4" onSubmit={handleEditpost}>
        <h2 className="mb-4">Edit job post</h2>
        <div className="mb-3">
          <div className="row">
            <div className="col">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Software Developer"
                name="title"
                defaultValue={title}
              />
            </div>
            <div className="col">
              <label htmlFor="creater" className="form-label">
                Creater
              </label>
              <input
                type="text"
                className="form-control"
                id="creater"
                placeholder="Creater's name "
                name="createBy"
                defaultValue={createdBy}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            placeholder="Name of organization"
            name="company"
            defaultValue={company}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Add location"
            name="location"
            defaultValue={location}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="level" className="form-label">
            Select level
          </label>
          <select
            name="level"
            id="level"
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Any Level</option>
            <option value="Entry level">Entry</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Job Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="2"
            name="description"
            defaultValue={description}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="requirement" className="form-label">
            Requirements
          </label>
          <textarea
            className="form-control"
            id="requirement"
            rows="2"
            name="requirement"
            defaultValue={requirement}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="benefits" className="form-label">
            Benefits
          </label>
          <textarea
            className="form-control"
            id="benefits"
            rows="2"
            name="benefits"
            defaultValue={benefits}
          ></textarea>
        </div>
        <div className="pt-3">
          <button
            type="submit"
            className="btn btn-blue w-100 border-0 text-white"
            disabled={pending}
          >
            {pending ? (
              <p className="mb-0">
                Updating....
                <span>
                  <img
                    className="ms-2"
                    height={20}
                    src={spinner}
                    alt="spinner"
                  />
                </span>
              </p>
            ) : (
              "Submit edited form"
            )}
          </button>
        </div>
        {showToast && error ? (
          <Toast subject="Error" textMessage={error} className="bg-light-red" />
        ) : showToast && success ? (
          <Toast
            subject=""
            textMessage="Update successful !, Please refresh job list"
            className="bg-light-green"
          />
        ) : null}
      </form>
    </div>
  );
}
