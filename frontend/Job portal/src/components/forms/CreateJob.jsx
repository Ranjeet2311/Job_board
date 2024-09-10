// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../features/jobSlice";
postData;
import spinner from "../../assets/images/spin.svg";

export default function CreateJob() {
  // const [succesful, setSuccesful] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const { error, pending } = useSelector((state) => state.jobs);

  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newPost = {
      userId: user._id,
      title: formData.get("title"),
      description: formData.get("description"),
      createBy: user.firstName,
      company: user.company,
      location: user.location,
      level: formData.get("level"),
      requirement: formData.get("requirement"),
      benefits: formData.get("benefits"),
    };

    dispatch(postData(newPost));
    e.target.reset();
  };

  // if (!pending && !error) {
  //   console.log(`Create post NO pending, No Error`);
  // }
  // if (success) {
  //   setSuccesful(true);
  // }

  // useEffect(() => {
  //   setSuccesful(false);
  // }, [setSuccesful]);

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
            Level
          </label>
          <input
            type="text"
            className="form-control"
            id="level"
            placeholder="Senior | Mid-level | Junior level"
            name="level"
            required
          />
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
            className="btn btn-bg w-100 border-0 text-white"
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
        {error && (
          <p className="text-center bg-danger text-white p-2 my-2">{error} </p>
        )}
        {/* {succesful && (
          <p className="p-2 bg-success mt-2 w-100 mx-auto text-white text-center">
            Successfully added job! Add new job post.
          </p>
        )} */}
      </form>
    </>
  );
}
