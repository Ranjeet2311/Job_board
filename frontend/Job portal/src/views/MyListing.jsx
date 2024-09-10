import { useSelector } from "react-redux";

export default function MyListing() {
  const { user } = useSelector((state) => state.users);

  console.log(`user :: , `, user);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <h2 className="text-center">My listings</h2>
        </div>
        <div className="col-12 col-lg-4">
          <h3>My Profile</h3>
          <p>= Edit Profile =</p>
          <p>
            name:
            <span>
              {user.firstName} {user.lastName}
            </span>
          </p>
          <p>
            Email:
            <span>{user.email}</span>
          </p>
          <p>
            Location:
            <span>{user.location}</span>
          </p>
          <p>
            Joined portal:
            <span> {user.createdAt}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
