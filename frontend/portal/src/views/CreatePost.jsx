import CreateJob from "../components/forms/CreateJob";
import Metadata from "../components/metadata/Metadata";

export default function CreatePost() {
  // const [login, setLogin] = useState(true);

  return (
    <>
      <Metadata title="Create post" description="Empowering others" />
      <div className="container page-wrap pb-4">
        <header>
          <h1 className="text-center pb-4">Add a new job</h1>
          <CreateJob />
        </header>
      </div>
    </>
  );
}
