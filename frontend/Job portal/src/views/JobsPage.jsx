import { useDispatch } from "react-redux";
import { fetchJobs } from "../features/jobSlice";
import JobsList from "../components/jobsList/JobsList";
import { useEffect } from "react";
import "../assets/styles/jobs.scss";
import JobFilter from "../components/jobFilter/JobFilter";

export default function JobsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="container page-wrap">
      <div className="row">
        <JobFilter />
        <JobsList />
      </div>
    </div>
  );
}
