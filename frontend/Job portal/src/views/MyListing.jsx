import Metadata from "../components/metadata/Metadata";
import Listing from "../components/user/Listing";
import JobFilter from "../components/jobFilter/JobFilter";

export default function MyListing() {
  return (
    <>
      <Metadata title="My listings" description="Empowering others" />
      <div className="container page-wrap pb-4 my-list">
        <div className="row">
          <div className="col-12 col-lg-12">
            <h1 className="text-center mb-2 mb-md-4 pb-2 pb-md-4">
              My listings
            </h1>
            <JobFilter refreshBtn={true} sortBtn={false} total={false} />
            <Listing />
          </div>
        </div>
      </div>
    </>
  );
}
