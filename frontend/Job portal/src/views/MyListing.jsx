import JobFilter from "../components/jobFilter/JobFilter";
import Listing from "../components/user/Listing";

export default function MyListing() {
  return (
    <div className="container page-wrap pb-4 my-list">
      <div className="row">
        <div className="col-12 col-lg-12">
          <h1 className="text-center">My listings</h1>
          <div className="mb-4 pb-2">
            <JobFilter></JobFilter>
          </div>
          <Listing />
        </div>
      </div>
    </div>
  );
}
