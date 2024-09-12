import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../features/jobSlice";
import BreadCrumbs from "../components/breadCrumbs/BreadCrumbs";

export default function JobDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { jobs } = useSelector((state) => state.jobs);
  const selectedJob = jobs.find((job) => job.title === id);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <BreadCrumbs
          backText="jobs"
          backLink="/jobs"
          jobTitle={id}
          jobLink={`/jobs/${id}`}
        />
      </div>
      {selectedJob ? (
        <>
          <h1> {selectedJob.title} </h1>
          <h1> {selectedJob.createdAt} </h1>
          <br></br>
          <h1> {selectedJob.company} </h1>
          <h1> {selectedJob.createBy} </h1>
          <h1> {selectedJob.createdAt} </h1>
          <h1> {selectedJob.level} </h1>
          <h1> {selectedJob.location} </h1>
          <br></br>
          <h1> {selectedJob.requirement} </h1>
          <h1> {selectedJob.description} </h1>
          <h1> {selectedJob.benefits} </h1>{" "}
        </>
      ) : (
        "Oops something unexpected happened. Refresh to fetch the details"
      )}
    </div>
  );
}
