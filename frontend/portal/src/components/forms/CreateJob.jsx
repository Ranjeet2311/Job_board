import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../features/jobSlice";
postData;
import spinner from "../../assets/images/spin.svg";
import xss from "xss";
import { trimWhiteSpace } from "../../utils/textUtils";
import Toast from "../toast/Toast";

export default function CreateJob() {
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const { error, pending, success } = useSelector((state) => state.jobs);

  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newPost = {
      userId: xss(trimWhiteSpace(user._id)),
      title: xss(trimWhiteSpace(formData.get("title"))),
      description: xss(trimWhiteSpace(formData.get("description"))),
      createBy: xss(trimWhiteSpace(user.firstName)),
      company: xss(trimWhiteSpace(user.company)),
      location: xss(trimWhiteSpace(user.location)),
      level: xss(trimWhiteSpace(formData.get("level"))),
      requirement: xss(trimWhiteSpace(formData.get("requirement"))),
      benefits: xss(trimWhiteSpace(formData.get("benefits"))),
    };

    dispatch(postData(newPost));
    console.log(`New job posted`);

    e.target.reset();
  };

  // if (!pending && !error) {
  //   console.log(`Create post NO pending, No Error`);
  // }
  // if (success) {
  //   setSuccesful(true);
  // }

  useEffect(() => {
    if (success || error) {
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 15000);

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [success, error]);

  return (
    <>
      <form className="w-75 mx-auto mt-4" onSubmit={handleAddJob}>
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
                required
              />
            </div>
            {/* <div className="col">
              <label htmlFor="creater" className="form-label">
                Creater
              </label>
              <input
                type="text"
                className="form-control"
                id="creater"
                placeholder="Creater's name "
                name="createBy"
                required
              />
            </div> */}
          </div>
        </div>
        {/* <div className="mb-3">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            placeholder="Name of organization"
            name="company"
            // required
          />
        </div> */}
        {/* <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Add location"
            name="location"
            // required
          />
        </div> */}
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
          {/* <input
            type="text"
            className="form-control"
            id="level"
            placeholder="Senior | Mid-level | Junior level"
            name="level"
            required
          /> */}
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
            required
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
            required
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
            required
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
                Add new posting
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
              "Add new job Post"
            )}
          </button>
        </div>
        {showToast && error ? (
          <Toast subject="Error" textMessage={error} className="bg-light-red" />
        ) : showToast && success ? (
          <Toast
            subject="Success"
            textMessage="Added new job post"
            className="bg-light-green"
          />
        ) : null}
      </form>
    </>
  );
}
