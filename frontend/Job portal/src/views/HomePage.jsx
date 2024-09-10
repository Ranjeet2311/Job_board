// import { useState } from "react";
// import Button from "../components/buttons/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchJobs } from "../features/jobSlice";
import JobsList from "../components/jobsList/JobsList";

export default function Home() {
  // const [btnText, setBtnText] = useState(false);
  // const { jobs } = useSelector((state) => state.jobs);

  // const dispatch = useDispatch();

  // const click = () => {
  //   if (jobs && jobs.length > 0) {
  //     dispatch(fetchJobs());
  //   }
  //   setBtnText(true);
  // };

  return (
    <div className="container">
      <div className="row">
        {/* <Button onButtonClick={click} isLInk={false} className="mt-2 mb-4">
          {btnText ? "All jobs" : "Refresh"}
        </Button> */}
        <JobsList></JobsList>

        <div className="col-12"></div>
      </div>
    </div>
  );
}
