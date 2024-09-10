import { useState } from "react";
import Button from "../components/buttons/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../features/jobSlice";
import JobsList from "../components/jobsList/JobsList";
import { useEffect } from "react";

export default function JobsPage() {
  const [btnText, setBtnText] = useState(false);
  const { jobs } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();
  const click = () => {
    dispatch(fetchJobs());
    setBtnText(true);
  };

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <Button onButtonClick={click} isLInk={false} className="mt-2 mb-4">
          {btnText ? "All jobs" : "Refresh"}
        </Button>
        <JobsList jobs={jobs} />

        <div className="col-12"></div>
      </div>
    </div>
  );
}
