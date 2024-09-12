import { useSelector } from "react-redux";
import "./JobsList.scss";
import SingleJob from "../singleJob/singleJob";

export default function JobsList() {
  const { jobs } = useSelector((state) => state.jobs);
  return (
    <>
      {jobs &&
        jobs.map((job, i) => (
          <div className="col-12 col-md-6 col-lg-4" key={i}>
            <SingleJob
              pageLink={`/jobs/${job.title}`}
              title={job.title}
              description={job.description}
              createdBy={job.createBy}
              company={job.company}
              level={job.level}
              location={job.location}
              requirement={job.requirement}
              benefits={job.benefits}
            />
          </div>
        ))}
    </>
  );
}
