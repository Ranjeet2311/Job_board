import { useDispatch } from "react-redux";
import { postData } from "../../features/jobSlice";
postData;

export default function CreateJob() {
  const dispatch = useDispatch();

  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newPost = {
      title: formData.get("title"),
      description: formData.get("description"),
      createBy: formData.get("createBy"),
      company: formData.get("company"),
      location: formData.get("location"),
      level: formData.get("level"),
      requirement: formData.get("requirement"),
      benefits: formData.get("benefits"),
    };

    dispatch(postData(newPost));
  };

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
                required
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
            // required
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
            // required
          />
        </div>
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
            // required
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
            // required
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
            // required
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
            // required
          ></textarea>
        </div>
        <div className="pt-3">
          <button
            type="submit"
            className="btn btn-bg w-100 border-0 text-white"
          >
            Add new posting
          </button>
        </div>
      </form>
    </>
  );
}
