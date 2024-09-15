import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../features/jobSlice";
import BreadCrumbs from "../components/breadCrumbs/BreadCrumbs";
import post from "../assets/images/post.svg";
import user from "../assets/images/user.svg";
import code from "../assets/images/code.svg";
import calender from "../assets/images/calender.svg";
import location from "../assets/images/location.svg";
import Button from "../components/buttons/Button";
import { format } from "date-fns";
import Metadata from "../components/metadata/Metadata";

export default function JobDetails() {
  const [first, setfirst] = useState("Apply for this job");

  const dispatch = useDispatch();
  const { id } = useParams();
  const { jobs } = useSelector((state) => state.jobs);
  const selectedJob = jobs.find((job) => job.title === id);

  const handleApply = () => {
    setfirst("Oops! It's a dummy text");
  };

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <>
      <Metadata title="Job Details" description="Empowering others" />
      <div className="container page-wrap">
        <div className="row">
          <BreadCrumbs
            backText="jobs"
            backLink="/jobs"
            jobTitle={id}
            jobLink={`/jobs/${id}`}
          />
        </div>
        {selectedJob ? (
          <div className="row job-details">
            <div className="col-12">
              <h1> {selectedJob.title} </h1>
              <div className="row mt-4 key_wrap">
                <div className="col-12 col-md-6">
                  <p className="key_details">
                    <span>
                      <img src={post} alt="post-icon" />
                    </span>
                    {selectedJob.company}
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <p className="key_details">
                    <span>
                      <img src={calender} alt="location-icon" />
                    </span>
                    {format(
                      new Date(selectedJob.createdAt),
                      "EEEE, MMMM do, yyyy"
                    )}
                    <br />
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <p className="key_details">
                    <span>
                      <img src={user} alt="location-icon" />
                    </span>
                    {selectedJob.createBy}
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <p className="key_details">
                    <span>
                      <img src={code} alt="location-icon" />
                    </span>
                    {selectedJob.level}
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <p className="key_details">
                    <span>
                      <img
                        src={location}
                        alt="location-icon"
                        className="me-2"
                      />
                    </span>
                    {selectedJob.location}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4 pt-2 description">
              {selectedJob.requirement}
            </div>
            <div className="col-12 mt-4 pt-2 description">
              {selectedJob.description}
            </div>
            <div className="col-12 mt-4 pt-2 description">
              {selectedJob.benefits}
            </div>
          </div>
        ) : (
          "Oops something unexpected happened. Refresh to fetch the details"
        )}

        <div className="row mt-4 pt-2">
          <Button onButtonClick={handleApply} className="btn-blue">
            {" "}
            {first}{" "}
          </Button>
        </div>
      </div>
    </>
  );
}
