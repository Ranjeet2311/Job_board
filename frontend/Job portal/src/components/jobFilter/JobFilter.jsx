import { useDispatch } from "react-redux";
import Button from "../buttons/Button";
import "./filter-section.scss";
import { fetchJobs } from "../../features/jobSlice";

export default function JobFilter() {
  const dispatch = useDispatch();
  const FetchDataHandler = () => {
    dispatch(fetchJobs());
  };
  return (
    <div className="col-12 filter-section ">
      <div className="row">
        <div className="col-12 col-md-6">
          <Button
            onButtonClick={FetchDataHandler}
            isLInk={false}
            className="btn-blue"
          >
            Refresh job list
          </Button>
        </div>
        <div className="col-12 col-md-6 mt-2 mt-md-0 d-flex justify-content-lg-end">
          <div className="dropdown">
            <button
              className="btn btn-blue dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Coming soon options
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Sort by date
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sort by alphabets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
