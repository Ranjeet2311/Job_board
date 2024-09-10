import { useSelector } from "react-redux";
import "./JobsList.scss";
import SingleJob from "../singleJob/singleJob";

export default function JobsList() {
  const { jobs } = useSelector((state) => state.jobs);
  return (
    <>
      {jobs &&
        jobs.map((item, i) => (
          <div className="col-12 col-lg-6" key={i}>
            <SingleJob
              title={item.title}
              description={item.description}
              createdBy={item.createBy}
              company={item.company}
              level={item.level}
              location={item.location}
              requirement={item.requirement}
              benefits={item.benefits}
            />
          </div>
        ))}
    </>
  );
}
