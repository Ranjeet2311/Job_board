import Listing from "../components/user/Listing";

export default function MyListing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-2">
          <h3>Filter section</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus officia veritatis ex itaque, ut sed facilis eum quos
            ipsum consectetur sapiente officiis, ad, nam repudiandae praesentium
            consequuntur tenetur ab. Esse facilis exercitationem rem animi
            officiis ex inventore, dicta distinctio totam odio? Saepe ex,
            consectetur harum expedita ipsam labore in. Voluptates ipsa, nisi
            dolore atque repudiandae voluptatem eos quos unde quibusdam!{" "}
          </p>
        </div>
        <div className="col-12 col-lg-10">
          <h2 className="text-center">My listings</h2>
          <Listing />
        </div>
      </div>
    </div>
  );
}
