import { useSelector } from "react-redux";
import JobPost from "./JobPost";
import "./user.scss";

export default function Listing() {
  const { jobs } = useSelector((state) => state.jobs);
  const { user } = useSelector((state) => state.users);

  const userPostings = jobs.filter((job) => job.userId === user._id);
  console.log(`userPostings : `, userPostings);

  return (
    <div className="user_list">
      {userPostings && userPostings.length ? (
        userPostings.map((post) => {
          return (
            <>
              <JobPost
                key={post._id}
                userId={post._id}
                title={post.title}
                description={post.description}
                createdBy={post.createBy}
                company={post.company}
                level={post.level}
                location={post.location}
                requirement={post.requirement}
                benefits={post.benefits}
                createdAt={post.createdAt}
              />
            </>
          );
        })
      ) : (
        <>
          <p className="text-success mb-4 text-center fw-bold">
            Welcome🎉,Thank you for creating your account!
          </p>
          <h4 className="text-center text-primary">
            🙏 Add your first job post
          </h4>
        </>
      )}
    </div>
  );
}
