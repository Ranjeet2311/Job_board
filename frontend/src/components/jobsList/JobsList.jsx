import { useState } from "react";
import { useSelector } from "react-redux";
import "./JobsList.scss";
import SingleJob from "../singleJob/SingleJob";

export default function JobsList() {
  const { jobs } = useSelector((state) => state.jobs);
  console.log(`Job list page : `, jobs);

  // -------------Pagination----------------

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {currentJobs &&
        currentJobs.map((job, i) => (
          <div className="col-12 col-md-6 col-lg-4" key={i}>
            <SingleJob
              pageLink={`/jobs/${job.title}`}
              title={job.title}
              description={job.description}
              createdBy={job.createBy}
              createdAt={job.createdAt}
              company={job.company}
              level={job.level}
              location={job.location}
              requirement={job.requirement}
              benefits={job.benefits}
            />
          </div>
        ))}

      <div className="col-12 py-4 my-4 d-flex justify-content-center aling-items-center">
        <button
          className="btn btn-white px-4 mt-2 me-4"
          onClick={handleBack}
          disabled={currentPage === 1}
        >
          Back
        </button>
        <button
          className="btn btn-white px-4 mt-2"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}
