import Metadata from "../components/metadata/Metadata";

export default function NotFoundPage() {
  return (
    <>
      <Metadata title="404 not found" description="Empowering others" />
      <div className="container page-wrap">
        <h2 className="text-center">404 Ooops!</h2>
        <h2 className="text-center">
          If{` it's `}not found then{` It's `}under construction
        </h2>
      </div>
    </>
  );
}
