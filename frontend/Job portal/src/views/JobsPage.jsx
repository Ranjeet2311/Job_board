import { useDispatch } from "react-redux";
import { fetchJobs } from "../features/jobSlice";
import JobsList from "../components/jobsList/JobsList";
import { useEffect } from "react";
import "../assets/styles/jobs.scss";
import JobFilter from "../components/jobFilter/JobFilter";
import Metadata from "../components/metadata/Metadata";

export default function JobsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <>
      <Metadata title="Jobs" description="Empowering others" />
      <div className="container page-wrap">
        <div className="row">
          <JobFilter refreshBtn={true} sortBtn={true} total={true} />
          <JobsList />
        </div>
      </div>
    </>
  );
}
