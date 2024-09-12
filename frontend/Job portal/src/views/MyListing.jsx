import JobFilter from "../components/jobFilter/JobFilter";
import Listing from "../components/user/Listing";

export default function MyListing() {
  return (
    <div className="container page-wrap pb-4">
      <div className="row">
        <div className="col-12 col-lg-2">
          <h3>Filter section</h3>
          <JobFilter></JobFilter>
        </div>
        <div className="col-12 col-lg-10">
          <h2 className="text-center">My listings</h2>
          <Listing />
        </div>
      </div>
    </div>
  );
}
