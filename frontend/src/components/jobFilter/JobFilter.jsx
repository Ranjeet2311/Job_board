import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Button from "../buttons/Button";
import "./filter-section.scss";
import {
  fetchJobs,
  sortByAlphabeticalOrderAToZ,
  sortByAlphabeticalOrderZToA,
  sortByTimestamp,
} from "../../features/jobSlice";

JobFilter.propTypes = {
  refreshBtn: PropTypes.bool.isRequired,
  sortBtn: PropTypes.bool.isRequired,
  total: PropTypes.bool.isRequired,
};
export default function JobFilter({ refreshBtn, sortBtn, total }) {
  const { jobLength } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();
  const FetchDataHandler = () => {
    dispatch(fetchJobs());
  };

  const handleSortByDate = () => {
    console.log(`handleSortByData`);
    dispatch(sortByTimestamp());
  };
  const handleSortAtoZ = () => {
    console.log(`handleSortAtoZ`);
    dispatch(sortByAlphabeticalOrderAToZ());
  };
  const handleSortZtoA = () => {
    console.log(`handleSortZtoA`);
    dispatch(sortByAlphabeticalOrderZToA());
  };

  return (
    <div className="col-12 filter-section ">
      <div className="row">
        {refreshBtn && (
          <div className="col-12 col-md-6 col-lg-4">
            <Button
              onButtonClick={FetchDataHandler}
              isLInk={false}
              className="btn-blue"
            >
              Refresh job list
            </Button>
          </div>
        )}
        {total && (
          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
            <h4>Total posted jobs: {jobLength}</h4>
          </div>
        )}

        {sortBtn && (
          <div className="col-12 col-md-6 col-lg-4 mt-2 mt-md-0 d-flex justify-content-lg-end">
            <div className="dropdown">
              <button
                className="btn btn-blue dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sorting options
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Button
                    className="dropdown-item"
                    isLInk={false}
                    onButtonClick={handleSortByDate}
                  >
                    Sort by Latest
                  </Button>
                </li>
                <li>
                  <Button
                    className="dropdown-item"
                    isLInk={false}
                    onButtonClick={handleSortAtoZ}
                  >
                    Sort A-Z
                  </Button>
                </li>
                <li>
                  <Button
                    className="dropdown-item"
                    isLInk={false}
                    onButtonClick={handleSortZtoA}
                  >
                    Sort Z-A
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
